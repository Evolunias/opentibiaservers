import ActiveOlderaCreateAccountKeywordPage, { generateMetadata } from './active-oldera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOlderaCreateAccountKeywordPage />;
}
