import BestDragonBallLegendKeywordPage, { generateMetadata } from './best-dragon-ball-legend';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestDragonBallLegendKeywordPage />;
}
