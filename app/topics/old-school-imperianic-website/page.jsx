import OldSchoolImperianicWebsiteKeywordPage, { generateMetadata } from './old-school-imperianic-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolImperianicWebsiteKeywordPage />;
}
