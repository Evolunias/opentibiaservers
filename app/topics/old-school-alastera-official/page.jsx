import OldSchoolAlasteraOfficialKeywordPage, { generateMetadata } from './old-school-alastera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAlasteraOfficialKeywordPage />;
}
