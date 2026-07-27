import ActiveThaisotCreateAccountKeywordPage, { generateMetadata } from './active-thaisot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThaisotCreateAccountKeywordPage />;
}
