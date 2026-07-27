import CurrentUnlineCreateAccountKeywordPage, { generateMetadata } from './current-unline-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentUnlineCreateAccountKeywordPage />;
}
