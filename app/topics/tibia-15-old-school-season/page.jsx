import Tibia15OldSchoolSeasonKeywordPage, { generateMetadata } from './tibia-15-old-school-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15OldSchoolSeasonKeywordPage />;
}
