import OldSchoolCyntaraCreateAccountKeywordPage, { generateMetadata } from './old-school-cyntara-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCyntaraCreateAccountKeywordPage />;
}
