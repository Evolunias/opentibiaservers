import Tibia81OldSchoolSeasonKeywordPage, { generateMetadata } from './tibia-8-1-old-school-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81OldSchoolSeasonKeywordPage />;
}
