import NewSeasonCanobHighscoresKeywordPage, { generateMetadata } from './new-season-canob-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCanobHighscoresKeywordPage />;
}
