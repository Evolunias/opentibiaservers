import TibiascapeEvoServerGermanyKeywordPage, { generateMetadata } from './tibiascape-evo-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeEvoServerGermanyKeywordPage />;
}
