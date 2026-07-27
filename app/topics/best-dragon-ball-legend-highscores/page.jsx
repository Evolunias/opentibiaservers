import BestDragonBallLegendHighscoresKeywordPage, { generateMetadata } from './best-dragon-ball-legend-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestDragonBallLegendHighscoresKeywordPage />;
}
