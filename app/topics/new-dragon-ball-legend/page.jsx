import NewDragonBallLegendKeywordPage, { generateMetadata } from './new-dragon-ball-legend';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDragonBallLegendKeywordPage />;
}
