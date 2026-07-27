import Tibia14OldSchoolGuideKeywordPage, { generateMetadata } from './tibia-14-old-school-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14OldSchoolGuideKeywordPage />;
}
