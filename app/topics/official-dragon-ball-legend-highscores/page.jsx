import OfficialDragonBallLegendHighscoresKeywordPage, { generateMetadata } from './official-dragon-ball-legend-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDragonBallLegendHighscoresKeywordPage />;
}
