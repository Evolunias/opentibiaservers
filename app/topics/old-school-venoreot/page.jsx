import OldSchoolVenoreotKeywordPage, { generateMetadata } from './old-school-venoreot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolVenoreotKeywordPage />;
}
