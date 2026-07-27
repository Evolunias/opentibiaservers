import Tibia11OldSchoolSeasonKeywordPage, { generateMetadata } from './tibia-11-old-school-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11OldSchoolSeasonKeywordPage />;
}
