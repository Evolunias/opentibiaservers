import FreshStartRangerSArcaniHighscoresKeywordPage, { generateMetadata } from './fresh-start-ranger-s-arcani-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRangerSArcaniHighscoresKeywordPage />;
}
