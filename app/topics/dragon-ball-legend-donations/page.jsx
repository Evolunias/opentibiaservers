import DragonBallLegendDonationsKeywordPage, { generateMetadata } from './dragon-ball-legend-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendDonationsKeywordPage />;
}
