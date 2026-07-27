import NoResetDragonBallLegendHighscoresKeywordPage, { generateMetadata } from './no-reset-dragon-ball-legend-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDragonBallLegendHighscoresKeywordPage />;
}
