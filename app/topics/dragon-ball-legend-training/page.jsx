import DragonBallLegendTrainingKeywordPage, { generateMetadata } from './dragon-ball-legend-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendTrainingKeywordPage />;
}
