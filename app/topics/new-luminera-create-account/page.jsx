import NewLumineraCreateAccountKeywordPage, { generateMetadata } from './new-luminera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewLumineraCreateAccountKeywordPage />;
}
