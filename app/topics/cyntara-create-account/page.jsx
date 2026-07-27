import CyntaraCreateAccountKeywordPage, { generateMetadata } from './cyntara-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraCreateAccountKeywordPage />;
}
