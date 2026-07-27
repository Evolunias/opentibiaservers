import DragonBallLegendUptimeKeywordPage, { generateMetadata } from './dragon-ball-legend-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendUptimeKeywordPage />;
}
