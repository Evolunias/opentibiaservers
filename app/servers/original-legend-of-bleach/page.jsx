import OriginalLegendOfBleachServerReviewPage, { generateMetadata } from './original-legend-of-bleach';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginalLegendOfBleachServerReviewPage />;
}
