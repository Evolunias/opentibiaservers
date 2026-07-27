import Tibia100OldSchoolSeasonKeywordPage, { generateMetadata } from './tibia-10-0-old-school-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100OldSchoolSeasonKeywordPage />;
}
