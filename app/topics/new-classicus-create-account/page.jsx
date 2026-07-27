import NewClassicusCreateAccountKeywordPage, { generateMetadata } from './new-classicus-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewClassicusCreateAccountKeywordPage />;
}
