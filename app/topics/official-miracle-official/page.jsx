import OfficialMiracleOfficialKeywordPage, { generateMetadata } from './official-miracle-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMiracleOfficialKeywordPage />;
}
