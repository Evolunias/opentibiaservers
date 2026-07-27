import NewKasteriaCreateAccountKeywordPage, { generateMetadata } from './new-kasteria-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewKasteriaCreateAccountKeywordPage />;
}
