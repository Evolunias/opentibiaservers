import Tibia71OldSchoolSeasonKeywordPage, { generateMetadata } from './tibia-7-1-old-school-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71OldSchoolSeasonKeywordPage />;
}
