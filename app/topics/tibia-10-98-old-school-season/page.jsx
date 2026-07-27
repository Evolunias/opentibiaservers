import Tibia1098OldSchoolSeasonKeywordPage, { generateMetadata } from './tibia-10-98-old-school-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098OldSchoolSeasonKeywordPage />;
}
