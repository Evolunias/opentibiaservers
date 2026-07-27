import DragonBallLegendUkServerKeywordPage, { generateMetadata } from './dragon-ball-legend-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendUkServerKeywordPage />;
}
