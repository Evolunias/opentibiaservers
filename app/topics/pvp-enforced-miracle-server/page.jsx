import PvpEnforcedMiracleServerKeywordPage, { generateMetadata } from './pvp-enforced-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedMiracleServerKeywordPage />;
}
