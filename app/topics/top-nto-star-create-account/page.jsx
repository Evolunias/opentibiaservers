import TopNtoStarCreateAccountKeywordPage, { generateMetadata } from './top-nto-star-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNtoStarCreateAccountKeywordPage />;
}
