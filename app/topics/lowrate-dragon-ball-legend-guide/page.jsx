import LowrateDragonBallLegendGuideKeywordPage, { generateMetadata } from './lowrate-dragon-ball-legend-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateDragonBallLegendGuideKeywordPage />;
}
