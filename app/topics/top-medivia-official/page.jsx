import TopMediviaOfficialKeywordPage, { generateMetadata } from './top-medivia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMediviaOfficialKeywordPage />;
}
