import FreshStartNepreniaHighscoresKeywordPage, { generateMetadata } from './fresh-start-neprenia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNepreniaHighscoresKeywordPage />;
}
