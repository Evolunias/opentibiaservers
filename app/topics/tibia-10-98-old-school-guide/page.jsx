import Tibia1098OldSchoolGuideKeywordPage, { generateMetadata } from './tibia-10-98-old-school-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098OldSchoolGuideKeywordPage />;
}
