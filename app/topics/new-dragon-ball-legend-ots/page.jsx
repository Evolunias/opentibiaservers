import NewDragonBallLegendOtsKeywordPage, { generateMetadata } from './new-dragon-ball-legend-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDragonBallLegendOtsKeywordPage />;
}
