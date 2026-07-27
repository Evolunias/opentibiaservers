import WithActivePlayersSeasonMexicoKeywordPage, { generateMetadata } from './with-active-players-season-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersSeasonMexicoKeywordPage />;
}
