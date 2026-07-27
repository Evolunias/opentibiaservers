import CustomDragonBallLegendOtServerKeywordPage, { generateMetadata } from './custom-dragon-ball-legend-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDragonBallLegendOtServerKeywordPage />;
}
