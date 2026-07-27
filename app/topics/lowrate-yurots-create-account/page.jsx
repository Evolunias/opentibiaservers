import LowrateYurotsCreateAccountKeywordPage, { generateMetadata } from './lowrate-yurots-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateYurotsCreateAccountKeywordPage />;
}
