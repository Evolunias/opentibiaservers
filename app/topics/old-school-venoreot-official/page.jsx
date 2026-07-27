import OldSchoolVenoreotOfficialKeywordPage, { generateMetadata } from './old-school-venoreot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolVenoreotOfficialKeywordPage />;
}
