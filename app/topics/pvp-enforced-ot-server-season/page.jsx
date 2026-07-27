import PvpEnforcedOtServerSeasonKeywordPage, { generateMetadata } from './pvp-enforced-ot-server-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedOtServerSeasonKeywordPage />;
}
