import CurrentThorniaHighscoresKeywordPage, { generateMetadata } from './current-thornia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThorniaHighscoresKeywordPage />;
}
