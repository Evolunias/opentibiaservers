import OldSchoolVenoreotRegisterKeywordPage, { generateMetadata } from './old-school-venoreot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolVenoreotRegisterKeywordPage />;
}
