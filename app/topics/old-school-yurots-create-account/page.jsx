import OldSchoolYurotsCreateAccountKeywordPage, { generateMetadata } from './old-school-yurots-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolYurotsCreateAccountKeywordPage />;
}
