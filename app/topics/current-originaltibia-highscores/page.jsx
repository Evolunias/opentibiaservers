import CurrentOriginaltibiaHighscoresKeywordPage, { generateMetadata } from './current-originaltibia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOriginaltibiaHighscoresKeywordPage />;
}
