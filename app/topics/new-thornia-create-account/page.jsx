import NewThorniaCreateAccountKeywordPage, { generateMetadata } from './new-thornia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThorniaCreateAccountKeywordPage />;
}
