import NewYurotsCreateAccountKeywordPage, { generateMetadata } from './new-yurots-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewYurotsCreateAccountKeywordPage />;
}
