import ActiveYurotsHighscoresKeywordPage, { generateMetadata } from './active-yurots-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveYurotsHighscoresKeywordPage />;
}
