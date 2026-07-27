import OldSchoolAlasteraLoginKeywordPage, { generateMetadata } from './old-school-alastera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAlasteraLoginKeywordPage />;
}
