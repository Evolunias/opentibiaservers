import Tibia84OldSchoolSeasonKeywordPage, { generateMetadata } from './tibia-8-4-old-school-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84OldSchoolSeasonKeywordPage />;
}
