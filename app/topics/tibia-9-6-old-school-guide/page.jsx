import Tibia96OldSchoolGuideKeywordPage, { generateMetadata } from './tibia-9-6-old-school-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96OldSchoolGuideKeywordPage />;
}
