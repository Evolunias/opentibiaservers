import PvpSeasonArgentinaKeywordPage, { generateMetadata } from './pvp-season-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpSeasonArgentinaKeywordPage />;
}
