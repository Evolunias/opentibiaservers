import TopMediviaCreateAccountKeywordPage, { generateMetadata } from './top-medivia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMediviaCreateAccountKeywordPage />;
}
