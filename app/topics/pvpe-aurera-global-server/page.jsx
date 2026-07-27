import PvpeAureraGlobalServerKeywordPage, { generateMetadata } from './pvpe-aurera-global-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeAureraGlobalServerKeywordPage />;
}
