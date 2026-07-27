import OldSchoolAlasteraCreateAccountKeywordPage, { generateMetadata } from './old-school-alastera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAlasteraCreateAccountKeywordPage />;
}
