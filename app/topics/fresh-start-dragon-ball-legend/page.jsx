import FreshStartDragonBallLegendKeywordPage, { generateMetadata } from './fresh-start-dragon-ball-legend';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartDragonBallLegendKeywordPage />;
}
