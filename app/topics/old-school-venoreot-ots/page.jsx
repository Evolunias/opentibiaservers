import OldSchoolVenoreotOtsKeywordPage, { generateMetadata } from './old-school-venoreot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolVenoreotOtsKeywordPage />;
}
