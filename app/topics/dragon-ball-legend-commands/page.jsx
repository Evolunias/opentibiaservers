import DragonBallLegendCommandsKeywordPage, { generateMetadata } from './dragon-ball-legend-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendCommandsKeywordPage />;
}
