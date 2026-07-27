import TibiamePvpeKeywordPage, { generateMetadata } from './tibiame-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiamePvpeKeywordPage />;
}
