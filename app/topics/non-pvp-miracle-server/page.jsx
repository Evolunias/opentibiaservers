import NonPvpMiracleServerKeywordPage, { generateMetadata } from './non-pvp-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpMiracleServerKeywordPage />;
}
