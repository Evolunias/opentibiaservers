import ActiveTibianusCreateAccountKeywordPage, { generateMetadata } from './active-tibianus-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibianusCreateAccountKeywordPage />;
}
