import DragonBallLegendLauncherKeywordPage, { generateMetadata } from './dragon-ball-legend-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendLauncherKeywordPage />;
}
