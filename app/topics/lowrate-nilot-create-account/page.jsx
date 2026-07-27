import LowrateNilotCreateAccountKeywordPage, { generateMetadata } from './lowrate-nilot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNilotCreateAccountKeywordPage />;
}
