import ActiveRubinotCreateAccountKeywordPage, { generateMetadata } from './active-rubinot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRubinotCreateAccountKeywordPage />;
}
