import Tibia86OldSchoolGuideKeywordPage, { generateMetadata } from './tibia-8-6-old-school-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86OldSchoolGuideKeywordPage />;
}
