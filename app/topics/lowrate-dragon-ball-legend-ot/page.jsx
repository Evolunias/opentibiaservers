import LowrateDragonBallLegendOtKeywordPage, { generateMetadata } from './lowrate-dragon-ball-legend-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateDragonBallLegendOtKeywordPage />;
}
