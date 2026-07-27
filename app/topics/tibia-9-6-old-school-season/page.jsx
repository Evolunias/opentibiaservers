import Tibia96OldSchoolSeasonKeywordPage, { generateMetadata } from './tibia-9-6-old-school-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96OldSchoolSeasonKeywordPage />;
}
