import FreshStartNtoStarHighscoresKeywordPage, { generateMetadata } from './fresh-start-nto-star-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNtoStarHighscoresKeywordPage />;
}
