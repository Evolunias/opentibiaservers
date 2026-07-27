import NewMediviaOfficialKeywordPage, { generateMetadata } from './new-medivia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMediviaOfficialKeywordPage />;
}
