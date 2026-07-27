import HighrateDragonBallLegendKeywordPage, { generateMetadata } from './highrate-dragon-ball-legend';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateDragonBallLegendKeywordPage />;
}
