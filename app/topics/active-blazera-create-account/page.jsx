import ActiveBlazeraCreateAccountKeywordPage, { generateMetadata } from './active-blazera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBlazeraCreateAccountKeywordPage />;
}
