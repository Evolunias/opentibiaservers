import OldSchoolRubinotCreateAccountKeywordPage, { generateMetadata } from './old-school-rubinot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRubinotCreateAccountKeywordPage />;
}
