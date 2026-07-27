import CurrentCanobHighscoresKeywordPage, { generateMetadata } from './current-canob-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCanobHighscoresKeywordPage />;
}
