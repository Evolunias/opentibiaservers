import NewSeasonSerenityHighscoresKeywordPage, { generateMetadata } from './new-season-serenity-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSerenityHighscoresKeywordPage />;
}
