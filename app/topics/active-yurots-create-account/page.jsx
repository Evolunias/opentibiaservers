import ActiveYurotsCreateAccountKeywordPage, { generateMetadata } from './active-yurots-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveYurotsCreateAccountKeywordPage />;
}
