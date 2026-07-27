import TopTibijkaCreateAccountKeywordPage, { generateMetadata } from './top-tibijka-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibijkaCreateAccountKeywordPage />;
}
