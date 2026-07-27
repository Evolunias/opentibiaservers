import ActiveKasteriaHighscoresKeywordPage, { generateMetadata } from './active-kasteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveKasteriaHighscoresKeywordPage />;
}
