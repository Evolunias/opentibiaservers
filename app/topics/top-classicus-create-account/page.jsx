import TopClassicusCreateAccountKeywordPage, { generateMetadata } from './top-classicus-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassicusCreateAccountKeywordPage />;
}
