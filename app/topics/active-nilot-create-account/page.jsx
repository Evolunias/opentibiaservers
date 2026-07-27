import ActiveNilotCreateAccountKeywordPage, { generateMetadata } from './active-nilot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNilotCreateAccountKeywordPage />;
}
