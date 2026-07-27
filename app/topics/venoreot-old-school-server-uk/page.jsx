import VenoreotOldSchoolServerUkKeywordPage, { generateMetadata } from './venoreot-old-school-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotOldSchoolServerUkKeywordPage />;
}
