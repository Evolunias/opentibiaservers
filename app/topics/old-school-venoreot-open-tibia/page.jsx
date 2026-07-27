import OldSchoolVenoreotOpenTibiaKeywordPage, { generateMetadata } from './old-school-venoreot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolVenoreotOpenTibiaKeywordPage />;
}
