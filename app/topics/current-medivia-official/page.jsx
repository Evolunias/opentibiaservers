import CurrentMediviaOfficialKeywordPage, { generateMetadata } from './current-medivia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMediviaOfficialKeywordPage />;
}
