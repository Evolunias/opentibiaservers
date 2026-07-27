import TheForgottenServerRankingsKeywordPage, { generateMetadata } from './the-forgotten-server-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerRankingsKeywordPage />;
}
