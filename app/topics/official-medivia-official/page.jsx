import OfficialMediviaOfficialKeywordPage, { generateMetadata } from './official-medivia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMediviaOfficialKeywordPage />;
}
