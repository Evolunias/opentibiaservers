import ActiveCyntaraCreateAccountKeywordPage, { generateMetadata } from './active-cyntara-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCyntaraCreateAccountKeywordPage />;
}
