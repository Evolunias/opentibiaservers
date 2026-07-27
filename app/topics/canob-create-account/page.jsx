import CanobCreateAccountKeywordPage, { generateMetadata } from './canob-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobCreateAccountKeywordPage />;
}
