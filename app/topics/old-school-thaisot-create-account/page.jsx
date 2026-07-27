import OldSchoolThaisotCreateAccountKeywordPage, { generateMetadata } from './old-school-thaisot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThaisotCreateAccountKeywordPage />;
}
