import OldSchoolMediviaCreateAccountKeywordPage, { generateMetadata } from './old-school-medivia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMediviaCreateAccountKeywordPage />;
}
