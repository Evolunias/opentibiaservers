import OldSchoolUnlineGuideKeywordPage, { generateMetadata } from './old-school-unline-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolUnlineGuideKeywordPage />;
}
