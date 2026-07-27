import OldSchoolGuideEuropeKeywordPage, { generateMetadata } from './old-school-guide-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGuideEuropeKeywordPage />;
}
