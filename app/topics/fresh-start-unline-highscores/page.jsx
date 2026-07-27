import FreshStartUnlineHighscoresKeywordPage, { generateMetadata } from './fresh-start-unline-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartUnlineHighscoresKeywordPage />;
}
