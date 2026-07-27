import OldSchoolCoxaotCreateAccountKeywordPage, { generateMetadata } from './old-school-coxaot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCoxaotCreateAccountKeywordPage />;
}
