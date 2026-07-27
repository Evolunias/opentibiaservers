import Tibia100OldSchoolGuideKeywordPage, { generateMetadata } from './tibia-10-0-old-school-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100OldSchoolGuideKeywordPage />;
}
