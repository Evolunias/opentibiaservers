import BestMediviaCreateAccountKeywordPage, { generateMetadata } from './best-medivia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMediviaCreateAccountKeywordPage />;
}
