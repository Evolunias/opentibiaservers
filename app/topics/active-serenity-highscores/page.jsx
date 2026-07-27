import ActiveSerenityHighscoresKeywordPage, { generateMetadata } from './active-serenity-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSerenityHighscoresKeywordPage />;
}
