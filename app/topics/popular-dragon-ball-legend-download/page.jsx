import PopularDragonBallLegendDownloadKeywordPage, { generateMetadata } from './popular-dragon-ball-legend-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDragonBallLegendDownloadKeywordPage />;
}
