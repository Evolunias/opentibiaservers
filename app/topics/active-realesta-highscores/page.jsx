import ActiveRealestaHighscoresKeywordPage, { generateMetadata } from './active-realesta-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealestaHighscoresKeywordPage />;
}
