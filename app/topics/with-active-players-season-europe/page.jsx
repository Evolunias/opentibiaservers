import WithActivePlayersSeasonEuropeKeywordPage, { generateMetadata } from './with-active-players-season-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersSeasonEuropeKeywordPage />;
}
