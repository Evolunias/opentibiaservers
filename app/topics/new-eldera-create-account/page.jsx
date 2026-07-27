import NewElderaCreateAccountKeywordPage, { generateMetadata } from './new-eldera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewElderaCreateAccountKeywordPage />;
}
