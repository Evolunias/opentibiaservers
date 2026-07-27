import OldSchoolThaisotWebsiteKeywordPage, { generateMetadata } from './old-school-thaisot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThaisotWebsiteKeywordPage />;
}
