import Tibia14OldSchoolSeasonKeywordPage, { generateMetadata } from './tibia-14-old-school-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14OldSchoolSeasonKeywordPage />;
}
