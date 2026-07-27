import NewTibiascapeCreateAccountKeywordPage, { generateMetadata } from './new-tibiascape-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiascapeCreateAccountKeywordPage />;
}
