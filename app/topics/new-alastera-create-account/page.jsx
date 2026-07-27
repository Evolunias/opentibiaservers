import NewAlasteraCreateAccountKeywordPage, { generateMetadata } from './new-alastera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAlasteraCreateAccountKeywordPage />;
}
