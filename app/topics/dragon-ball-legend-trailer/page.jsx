import DragonBallLegendTrailerKeywordPage, { generateMetadata } from './dragon-ball-legend-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendTrailerKeywordPage />;
}
