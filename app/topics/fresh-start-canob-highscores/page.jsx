import FreshStartCanobHighscoresKeywordPage, { generateMetadata } from './fresh-start-canob-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCanobHighscoresKeywordPage />;
}
