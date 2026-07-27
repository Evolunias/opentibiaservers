import OldSchoolVenoreotOtKeywordPage, { generateMetadata } from './old-school-venoreot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolVenoreotOtKeywordPage />;
}
