import OfficialMiracleOtServerKeywordPage, { generateMetadata } from './official-miracle-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMiracleOtServerKeywordPage />;
}
