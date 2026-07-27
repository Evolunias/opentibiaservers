import Tibia74OldSchoolSeasonKeywordPage, { generateMetadata } from './tibia-7-4-old-school-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74OldSchoolSeasonKeywordPage />;
}
