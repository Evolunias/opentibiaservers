import OfficialMiracleServerKeywordPage, { generateMetadata } from './official-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMiracleServerKeywordPage />;
}
