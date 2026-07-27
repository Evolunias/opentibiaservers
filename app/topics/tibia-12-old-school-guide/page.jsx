import Tibia12OldSchoolGuideKeywordPage, { generateMetadata } from './tibia-12-old-school-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12OldSchoolGuideKeywordPage />;
}
