import Tibia13OldSchoolSeasonKeywordPage, { generateMetadata } from './tibia-13-old-school-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13OldSchoolSeasonKeywordPage />;
}
