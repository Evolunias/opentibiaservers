import NewCanobCreateAccountKeywordPage, { generateMetadata } from './new-canob-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCanobCreateAccountKeywordPage />;
}
