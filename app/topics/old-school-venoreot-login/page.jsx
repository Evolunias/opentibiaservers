import OldSchoolVenoreotLoginKeywordPage, { generateMetadata } from './old-school-venoreot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolVenoreotLoginKeywordPage />;
}
