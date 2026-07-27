import TibiameEvoServerGermanyKeywordPage, { generateMetadata } from './tibiame-evo-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameEvoServerGermanyKeywordPage />;
}
