import CurrentMediviaCreateAccountKeywordPage, { generateMetadata } from './current-medivia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMediviaCreateAccountKeywordPage />;
}
