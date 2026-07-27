import OfficialYurotsCreateAccountKeywordPage, { generateMetadata } from './official-yurots-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialYurotsCreateAccountKeywordPage />;
}
