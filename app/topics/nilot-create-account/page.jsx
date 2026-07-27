import NilotCreateAccountKeywordPage, { generateMetadata } from './nilot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotCreateAccountKeywordPage />;
}
