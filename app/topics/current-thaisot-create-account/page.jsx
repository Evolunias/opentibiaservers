import CurrentThaisotCreateAccountKeywordPage, { generateMetadata } from './current-thaisot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThaisotCreateAccountKeywordPage />;
}
