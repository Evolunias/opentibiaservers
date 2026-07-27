import CurrentYurotsCreateAccountKeywordPage, { generateMetadata } from './current-yurots-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentYurotsCreateAccountKeywordPage />;
}
