import OldSchoolClassicusCreateAccountKeywordPage, { generateMetadata } from './old-school-classicus-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassicusCreateAccountKeywordPage />;
}
