import WithActivePlayersSeasonLatinAmericaKeywordPage, { generateMetadata } from './with-active-players-season-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersSeasonLatinAmericaKeywordPage />;
}
