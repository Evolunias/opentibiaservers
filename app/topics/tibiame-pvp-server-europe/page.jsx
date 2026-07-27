import TibiamePvpServerEuropeKeywordPage, { generateMetadata } from './tibiame-pvp-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiamePvpServerEuropeKeywordPage />;
}
