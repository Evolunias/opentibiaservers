import BestRangerSArcaniHighscoresKeywordPage, { generateMetadata } from './best-ranger-s-arcani-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRangerSArcaniHighscoresKeywordPage />;
}
