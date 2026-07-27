import PvpEnforcedSeasonArgentinaKeywordPage, { generateMetadata } from './pvp-enforced-season-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedSeasonArgentinaKeywordPage />;
}
