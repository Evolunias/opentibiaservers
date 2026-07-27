import TibiameEvoServerMexicoKeywordPage, { generateMetadata } from './tibiame-evo-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameEvoServerMexicoKeywordPage />;
}
