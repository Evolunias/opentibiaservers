import TibiameEvoServerUkKeywordPage, { generateMetadata } from './tibiame-evo-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameEvoServerUkKeywordPage />;
}
