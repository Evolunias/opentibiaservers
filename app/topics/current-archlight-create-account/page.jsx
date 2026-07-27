import CurrentArchlightCreateAccountKeywordPage, { generateMetadata } from './current-archlight-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArchlightCreateAccountKeywordPage />;
}
