import TopTibiaraCreateAccountKeywordPage, { generateMetadata } from './top-tibiara-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaraCreateAccountKeywordPage />;
}
