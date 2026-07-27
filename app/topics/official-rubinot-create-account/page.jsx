import OfficialRubinotCreateAccountKeywordPage, { generateMetadata } from './official-rubinot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRubinotCreateAccountKeywordPage />;
}
