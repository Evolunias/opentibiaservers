import NewMediviaCreateAccountKeywordPage, { generateMetadata } from './new-medivia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMediviaCreateAccountKeywordPage />;
}
