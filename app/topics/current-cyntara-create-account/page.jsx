import CurrentCyntaraCreateAccountKeywordPage, { generateMetadata } from './current-cyntara-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCyntaraCreateAccountKeywordPage />;
}
