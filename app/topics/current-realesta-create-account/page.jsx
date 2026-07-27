import CurrentRealestaCreateAccountKeywordPage, { generateMetadata } from './current-realesta-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealestaCreateAccountKeywordPage />;
}
