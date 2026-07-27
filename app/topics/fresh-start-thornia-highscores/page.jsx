import FreshStartThorniaHighscoresKeywordPage, { generateMetadata } from './fresh-start-thornia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThorniaHighscoresKeywordPage />;
}
