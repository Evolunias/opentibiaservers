import NewSeasonDragonBallLegendHighscoresKeywordPage, { generateMetadata } from './new-season-dragon-ball-legend-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonDragonBallLegendHighscoresKeywordPage />;
}
