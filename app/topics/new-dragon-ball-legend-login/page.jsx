import NewDragonBallLegendLoginKeywordPage, { generateMetadata } from './new-dragon-ball-legend-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDragonBallLegendLoginKeywordPage />;
}
