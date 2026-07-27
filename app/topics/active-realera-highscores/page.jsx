import ActiveRealeraHighscoresKeywordPage, { generateMetadata } from './active-realera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealeraHighscoresKeywordPage />;
}
