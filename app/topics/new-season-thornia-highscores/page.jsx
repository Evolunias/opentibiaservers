import NewSeasonThorniaHighscoresKeywordPage, { generateMetadata } from './new-season-thornia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThorniaHighscoresKeywordPage />;
}
