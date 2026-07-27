import CustomDragonBallLegendHighscoresKeywordPage, { generateMetadata } from './custom-dragon-ball-legend-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDragonBallLegendHighscoresKeywordPage />;
}
