import Tibia13OldSchoolGuideKeywordPage, { generateMetadata } from './tibia-13-old-school-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13OldSchoolGuideKeywordPage />;
}
