import CurrentNepreniaHighscoresKeywordPage, { generateMetadata } from './current-neprenia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNepreniaHighscoresKeywordPage />;
}
