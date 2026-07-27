import TibiameEvoServerEuropeKeywordPage, { generateMetadata } from './tibiame-evo-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameEvoServerEuropeKeywordPage />;
}
