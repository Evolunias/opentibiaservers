import NewSaintsotCreateAccountKeywordPage, { generateMetadata } from './new-saintsot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSaintsotCreateAccountKeywordPage />;
}
