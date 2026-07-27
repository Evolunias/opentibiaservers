import NewSeasonMarolaotHighscoresKeywordPage, { generateMetadata } from './new-season-marolaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMarolaotHighscoresKeywordPage />;
}
