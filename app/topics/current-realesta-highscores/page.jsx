import CurrentRealestaHighscoresKeywordPage, { generateMetadata } from './current-realesta-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealestaHighscoresKeywordPage />;
}
