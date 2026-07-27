import WithActivePlayersSeasonUkKeywordPage, { generateMetadata } from './with-active-players-season-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersSeasonUkKeywordPage />;
}
