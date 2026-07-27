import OpenTibiaServersRankingsKeywordPage, { generateMetadata } from './open-tibia-servers-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersRankingsKeywordPage />;
}
