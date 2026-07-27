import OldSchoolAlasteraOtsKeywordPage, { generateMetadata } from './old-school-alastera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAlasteraOtsKeywordPage />;
}
