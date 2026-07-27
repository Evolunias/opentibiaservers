import FreshStartSerenityHighscoresKeywordPage, { generateMetadata } from './fresh-start-serenity-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSerenityHighscoresKeywordPage />;
}
