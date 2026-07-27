import ActiveTibiaraCreateAccountKeywordPage, { generateMetadata } from './active-tibiara-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaraCreateAccountKeywordPage />;
}
