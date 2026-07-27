import Tibia81OldSchoolGuideKeywordPage, { generateMetadata } from './tibia-8-1-old-school-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81OldSchoolGuideKeywordPage />;
}
