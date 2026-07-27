import LowrateCanobCreateAccountKeywordPage, { generateMetadata } from './lowrate-canob-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCanobCreateAccountKeywordPage />;
}
