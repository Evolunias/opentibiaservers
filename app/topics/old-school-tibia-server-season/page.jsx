import OldSchoolTibiaServerSeasonKeywordPage, { generateMetadata } from './old-school-tibia-server-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerSeasonKeywordPage />;
}
