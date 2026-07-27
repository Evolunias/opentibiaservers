import DragonBallLegendLaunchKeywordPage, { generateMetadata } from './dragon-ball-legend-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendLaunchKeywordPage />;
}
