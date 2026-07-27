import NewNilotCreateAccountKeywordPage, { generateMetadata } from './new-nilot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNilotCreateAccountKeywordPage />;
}
