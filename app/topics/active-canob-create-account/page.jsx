import ActiveCanobCreateAccountKeywordPage, { generateMetadata } from './active-canob-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCanobCreateAccountKeywordPage />;
}
