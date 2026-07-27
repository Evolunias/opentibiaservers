import OldSchoolUnlineWebsiteKeywordPage, { generateMetadata } from './old-school-unline-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolUnlineWebsiteKeywordPage />;
}
