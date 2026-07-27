import OldSchoolGuideGermanyKeywordPage, { generateMetadata } from './old-school-guide-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGuideGermanyKeywordPage />;
}
