import CurrentNilotHighscoresKeywordPage, { generateMetadata } from './current-nilot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNilotHighscoresKeywordPage />;
}
