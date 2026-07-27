import CurrentNepreniaCreateAccountKeywordPage, { generateMetadata } from './current-neprenia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNepreniaCreateAccountKeywordPage />;
}
