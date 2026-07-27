import CurrentRealeraCreateAccountKeywordPage, { generateMetadata } from './current-realera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealeraCreateAccountKeywordPage />;
}
