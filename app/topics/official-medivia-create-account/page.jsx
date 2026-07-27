import OfficialMediviaCreateAccountKeywordPage, { generateMetadata } from './official-medivia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMediviaCreateAccountKeywordPage />;
}
