import OfficialMiraclePrivateServerKeywordPage, { generateMetadata } from './official-miracle-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMiraclePrivateServerKeywordPage />;
}
