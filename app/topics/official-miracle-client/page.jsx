import OfficialMiracleClientKeywordPage, { generateMetadata } from './official-miracle-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMiracleClientKeywordPage />;
}
