import Tibia71OldSchoolGuideKeywordPage, { generateMetadata } from './tibia-7-1-old-school-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71OldSchoolGuideKeywordPage />;
}
