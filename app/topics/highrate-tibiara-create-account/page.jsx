import HighrateTibiaraCreateAccountKeywordPage, { generateMetadata } from './highrate-tibiara-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaraCreateAccountKeywordPage />;
}
