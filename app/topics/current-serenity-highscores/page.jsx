import CurrentSerenityHighscoresKeywordPage, { generateMetadata } from './current-serenity-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSerenityHighscoresKeywordPage />;
}
