import LowrateTibiaraCreateAccountKeywordPage, { generateMetadata } from './lowrate-tibiara-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaraCreateAccountKeywordPage />;
}
