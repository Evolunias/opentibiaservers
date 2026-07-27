import OldSchoolTibiaServerRankingsKeywordPage, { generateMetadata } from './old-school-tibia-server-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerRankingsKeywordPage />;
}
