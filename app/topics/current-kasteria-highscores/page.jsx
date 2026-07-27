import CurrentKasteriaHighscoresKeywordPage, { generateMetadata } from './current-kasteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentKasteriaHighscoresKeywordPage />;
}
