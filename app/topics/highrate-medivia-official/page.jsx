import HighrateMediviaOfficialKeywordPage, { generateMetadata } from './highrate-medivia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMediviaOfficialKeywordPage />;
}
