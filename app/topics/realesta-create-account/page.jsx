import RealestaCreateAccountKeywordPage, { generateMetadata } from './realesta-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaCreateAccountKeywordPage />;
}
