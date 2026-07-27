import OfficialOlderaCreateAccountKeywordPage, { generateMetadata } from './official-oldera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOlderaCreateAccountKeywordPage />;
}
