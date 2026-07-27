import OldSchoolVenoreotTibiaKeywordPage, { generateMetadata } from './old-school-venoreot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolVenoreotTibiaKeywordPage />;
}
