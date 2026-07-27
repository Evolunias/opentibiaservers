import PvpeMiracleServerKeywordPage, { generateMetadata } from './pvpe-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeMiracleServerKeywordPage />;
}
