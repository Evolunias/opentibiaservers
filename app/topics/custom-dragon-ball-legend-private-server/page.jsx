import CustomDragonBallLegendPrivateServerKeywordPage, { generateMetadata } from './custom-dragon-ball-legend-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDragonBallLegendPrivateServerKeywordPage />;
}
