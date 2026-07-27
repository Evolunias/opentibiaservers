import PvpMiracleServerKeywordPage, { generateMetadata } from './pvp-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpMiracleServerKeywordPage />;
}
