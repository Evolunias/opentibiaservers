import OldSchoolVenoreotGuideKeywordPage, { generateMetadata } from './old-school-venoreot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolVenoreotGuideKeywordPage />;
}
