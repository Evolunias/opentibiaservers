import NewTibiantisCreateAccountKeywordPage, { generateMetadata } from './new-tibiantis-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiantisCreateAccountKeywordPage />;
}
