import VenoreotOldSchoolServerGermanyKeywordPage, { generateMetadata } from './venoreot-old-school-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotOldSchoolServerGermanyKeywordPage />;
}
