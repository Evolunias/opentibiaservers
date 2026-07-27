import OfficialCanobCreateAccountKeywordPage, { generateMetadata } from './official-canob-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCanobCreateAccountKeywordPage />;
}
