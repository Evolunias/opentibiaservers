import OldSchoolVenoreotWebsiteKeywordPage, { generateMetadata } from './old-school-venoreot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolVenoreotWebsiteKeywordPage />;
}
