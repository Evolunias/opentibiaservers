import NewSerenityHighscoresKeywordPage, { generateMetadata } from './new-serenity-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSerenityHighscoresKeywordPage />;
}
