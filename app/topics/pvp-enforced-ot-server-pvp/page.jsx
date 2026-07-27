import PvpEnforcedOtServerPvpKeywordPage, { generateMetadata } from './pvp-enforced-ot-server-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedOtServerPvpKeywordPage />;
}
