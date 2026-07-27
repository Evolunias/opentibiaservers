import OldSchoolOxygenotGuideKeywordPage, { generateMetadata } from './old-school-oxygenot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOxygenotGuideKeywordPage />;
}
