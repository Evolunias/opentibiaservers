import Tibia12OldSchoolSeasonKeywordPage, { generateMetadata } from './tibia-12-old-school-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12OldSchoolSeasonKeywordPage />;
}
