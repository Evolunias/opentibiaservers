import FreshStartClassicusHighscoresKeywordPage, { generateMetadata } from './fresh-start-classicus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClassicusHighscoresKeywordPage />;
}
