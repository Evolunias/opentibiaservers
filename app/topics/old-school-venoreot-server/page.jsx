import OldSchoolVenoreotServerKeywordPage, { generateMetadata } from './old-school-venoreot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolVenoreotServerKeywordPage />;
}
