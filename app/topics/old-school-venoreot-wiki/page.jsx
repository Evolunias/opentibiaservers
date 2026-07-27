import OldSchoolVenoreotWikiKeywordPage, { generateMetadata } from './old-school-venoreot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolVenoreotWikiKeywordPage />;
}
