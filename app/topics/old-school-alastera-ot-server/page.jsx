import OldSchoolAlasteraOtServerKeywordPage, { generateMetadata } from './old-school-alastera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAlasteraOtServerKeywordPage />;
}
