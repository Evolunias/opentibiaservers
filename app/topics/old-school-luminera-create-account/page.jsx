import OldSchoolLumineraCreateAccountKeywordPage, { generateMetadata } from './old-school-luminera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLumineraCreateAccountKeywordPage />;
}
