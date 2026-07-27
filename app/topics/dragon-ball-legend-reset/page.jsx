import DragonBallLegendResetKeywordPage, { generateMetadata } from './dragon-ball-legend-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendResetKeywordPage />;
}
