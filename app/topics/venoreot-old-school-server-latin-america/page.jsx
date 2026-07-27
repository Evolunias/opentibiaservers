import VenoreotOldSchoolServerLatinAmericaKeywordPage, { generateMetadata } from './venoreot-old-school-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotOldSchoolServerLatinAmericaKeywordPage />;
}
