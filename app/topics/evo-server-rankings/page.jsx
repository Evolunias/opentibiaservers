import EvoServerRankingsKeywordPage, { generateMetadata } from './evo-server-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerRankingsKeywordPage />;
}
