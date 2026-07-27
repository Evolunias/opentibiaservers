import OldSchoolAlasteraOtKeywordPage, { generateMetadata } from './old-school-alastera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAlasteraOtKeywordPage />;
}
