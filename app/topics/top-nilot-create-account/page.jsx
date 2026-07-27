import TopNilotCreateAccountKeywordPage, { generateMetadata } from './top-nilot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNilotCreateAccountKeywordPage />;
}
