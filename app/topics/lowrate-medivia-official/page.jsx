import LowrateMediviaOfficialKeywordPage, { generateMetadata } from './lowrate-medivia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMediviaOfficialKeywordPage />;
}
