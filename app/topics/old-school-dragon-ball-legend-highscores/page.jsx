import OldSchoolDragonBallLegendHighscoresKeywordPage, { generateMetadata } from './old-school-dragon-ball-legend-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDragonBallLegendHighscoresKeywordPage />;
}
