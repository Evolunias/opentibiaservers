import OpenTibiaServerListRankingsKeywordPage, { generateMetadata } from './open-tibia-server-list-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListRankingsKeywordPage />;
}
