import FreshStartMidhemHighscoresKeywordPage, { generateMetadata } from './fresh-start-midhem-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMidhemHighscoresKeywordPage />;
}
