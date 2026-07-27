import FreshStartRealestaHighscoresKeywordPage, { generateMetadata } from './fresh-start-realesta-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRealestaHighscoresKeywordPage />;
}
