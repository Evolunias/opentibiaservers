import OldSchoolGuidePolandKeywordPage, { generateMetadata } from './old-school-guide-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGuidePolandKeywordPage />;
}
