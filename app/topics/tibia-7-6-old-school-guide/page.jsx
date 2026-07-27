import Tibia76OldSchoolGuideKeywordPage, { generateMetadata } from './tibia-7-6-old-school-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76OldSchoolGuideKeywordPage />;
}
