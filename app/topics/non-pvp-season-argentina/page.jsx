import NonPvpSeasonArgentinaKeywordPage, { generateMetadata } from './non-pvp-season-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpSeasonArgentinaKeywordPage />;
}
