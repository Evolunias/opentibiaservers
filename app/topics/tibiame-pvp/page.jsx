import TibiamePvpKeywordPage, { generateMetadata } from './tibiame-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiamePvpKeywordPage />;
}
