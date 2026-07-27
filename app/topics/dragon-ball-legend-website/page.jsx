import DragonBallLegendWebsiteKeywordPage, { generateMetadata } from './dragon-ball-legend-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendWebsiteKeywordPage />;
}
