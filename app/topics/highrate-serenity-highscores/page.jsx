import HighrateSerenityHighscoresKeywordPage, { generateMetadata } from './highrate-serenity-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSerenityHighscoresKeywordPage />;
}
