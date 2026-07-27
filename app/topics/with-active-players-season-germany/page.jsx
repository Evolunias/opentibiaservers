import WithActivePlayersSeasonGermanyKeywordPage, { generateMetadata } from './with-active-players-season-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersSeasonGermanyKeywordPage />;
}
