import CurrentNtoStarHighscoresKeywordPage, { generateMetadata } from './current-nto-star-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNtoStarHighscoresKeywordPage />;
}
