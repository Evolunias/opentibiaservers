import CurrentMiracleCreateAccountKeywordPage, { generateMetadata } from './current-miracle-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMiracleCreateAccountKeywordPage />;
}
