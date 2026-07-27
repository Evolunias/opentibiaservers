import TopCanobCreateAccountKeywordPage, { generateMetadata } from './top-canob-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCanobCreateAccountKeywordPage />;
}
