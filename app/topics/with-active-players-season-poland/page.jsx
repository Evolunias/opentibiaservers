import WithActivePlayersSeasonPolandKeywordPage, { generateMetadata } from './with-active-players-season-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersSeasonPolandKeywordPage />;
}
