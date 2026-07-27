import Tibia15OldSchoolGuideKeywordPage, { generateMetadata } from './tibia-15-old-school-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15OldSchoolGuideKeywordPage />;
}
