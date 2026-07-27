import Tibia80OldSchoolGuideKeywordPage, { generateMetadata } from './tibia-8-0-old-school-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80OldSchoolGuideKeywordPage />;
}
