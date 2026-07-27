import WithActivePlayersSeasonArgentinaKeywordPage, { generateMetadata } from './with-active-players-season-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersSeasonArgentinaKeywordPage />;
}
