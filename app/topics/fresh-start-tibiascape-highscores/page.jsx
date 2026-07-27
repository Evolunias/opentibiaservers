import FreshStartTibiascapeHighscoresKeywordPage, { generateMetadata } from './fresh-start-tibiascape-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiascapeHighscoresKeywordPage />;
}
