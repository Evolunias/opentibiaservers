import WithActivePlayersSeasonSwedenKeywordPage, { generateMetadata } from './with-active-players-season-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersSeasonSwedenKeywordPage />;
}
