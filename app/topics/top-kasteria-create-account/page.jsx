import TopKasteriaCreateAccountKeywordPage, { generateMetadata } from './top-kasteria-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopKasteriaCreateAccountKeywordPage />;
}
