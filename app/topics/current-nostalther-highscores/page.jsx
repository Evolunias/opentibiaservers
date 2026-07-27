import CurrentNostaltherHighscoresKeywordPage, { generateMetadata } from './current-nostalther-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNostaltherHighscoresKeywordPage />;
}
