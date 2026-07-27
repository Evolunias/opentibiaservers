import NewRubinotCreateAccountKeywordPage, { generateMetadata } from './new-rubinot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRubinotCreateAccountKeywordPage />;
}
