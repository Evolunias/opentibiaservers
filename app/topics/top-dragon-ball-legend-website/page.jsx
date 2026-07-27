import TopDragonBallLegendWebsiteKeywordPage, { generateMetadata } from './top-dragon-ball-legend-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDragonBallLegendWebsiteKeywordPage />;
}
