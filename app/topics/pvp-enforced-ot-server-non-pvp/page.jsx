import PvpEnforcedOtServerNonPvpKeywordPage, { generateMetadata } from './pvp-enforced-ot-server-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedOtServerNonPvpKeywordPage />;
}
