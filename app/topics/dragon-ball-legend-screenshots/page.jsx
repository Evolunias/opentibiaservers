import DragonBallLegendScreenshotsKeywordPage, { generateMetadata } from './dragon-ball-legend-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendScreenshotsKeywordPage />;
}
