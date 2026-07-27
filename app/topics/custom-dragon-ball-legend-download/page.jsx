import CustomDragonBallLegendDownloadKeywordPage, { generateMetadata } from './custom-dragon-ball-legend-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDragonBallLegendDownloadKeywordPage />;
}
