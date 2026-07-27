import CurrentElderaCreateAccountKeywordPage, { generateMetadata } from './current-eldera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentElderaCreateAccountKeywordPage />;
}
