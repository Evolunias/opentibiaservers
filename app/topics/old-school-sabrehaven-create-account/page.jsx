import OldSchoolSabrehavenCreateAccountKeywordPage, { generateMetadata } from './old-school-sabrehaven-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSabrehavenCreateAccountKeywordPage />;
}
