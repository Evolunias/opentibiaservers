import FreshStartLumineraHighscoresKeywordPage, { generateMetadata } from './fresh-start-luminera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLumineraHighscoresKeywordPage />;
}
