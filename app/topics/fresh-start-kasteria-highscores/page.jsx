import FreshStartKasteriaHighscoresKeywordPage, { generateMetadata } from './fresh-start-kasteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartKasteriaHighscoresKeywordPage />;
}
