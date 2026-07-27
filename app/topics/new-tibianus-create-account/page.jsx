import NewTibianusCreateAccountKeywordPage, { generateMetadata } from './new-tibianus-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibianusCreateAccountKeywordPage />;
}
