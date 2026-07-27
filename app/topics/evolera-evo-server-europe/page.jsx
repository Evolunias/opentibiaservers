import EvoleraEvoServerEuropeKeywordPage, { generateMetadata } from './evolera-evo-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraEvoServerEuropeKeywordPage />;
}
