import Tibia80OldSchoolSeasonKeywordPage, { generateMetadata } from './tibia-8-0-old-school-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80OldSchoolSeasonKeywordPage />;
}
