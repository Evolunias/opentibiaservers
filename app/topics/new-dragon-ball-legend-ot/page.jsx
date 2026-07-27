import NewDragonBallLegendOtKeywordPage, { generateMetadata } from './new-dragon-ball-legend-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDragonBallLegendOtKeywordPage />;
}
