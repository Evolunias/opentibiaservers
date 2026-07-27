import NewOlderaCreateAccountKeywordPage, { generateMetadata } from './new-oldera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOlderaCreateAccountKeywordPage />;
}
