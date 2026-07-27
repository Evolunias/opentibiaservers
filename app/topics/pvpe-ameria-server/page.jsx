import PvpeAmeriaServerKeywordPage, { generateMetadata } from './pvpe-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeAmeriaServerKeywordPage />;
}
