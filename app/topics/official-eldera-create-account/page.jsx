import OfficialElderaCreateAccountKeywordPage, { generateMetadata } from './official-eldera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialElderaCreateAccountKeywordPage />;
}
