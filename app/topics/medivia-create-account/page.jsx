import MediviaCreateAccountKeywordPage, { generateMetadata } from './medivia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaCreateAccountKeywordPage />;
}
