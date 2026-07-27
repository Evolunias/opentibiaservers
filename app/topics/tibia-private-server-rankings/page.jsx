import TibiaPrivateServerRankingsKeywordPage, { generateMetadata } from './tibia-private-server-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerRankingsKeywordPage />;
}
