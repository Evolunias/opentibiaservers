import PvpeDemolidoresServerKeywordPage, { generateMetadata } from './pvpe-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDemolidoresServerKeywordPage />;
}
