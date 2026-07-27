import OldSchoolGuideUkKeywordPage, { generateMetadata } from './old-school-guide-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGuideUkKeywordPage />;
}
