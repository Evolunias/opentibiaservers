import CrownotsLowRate4funServerServerReviewPage, { generateMetadata } from './crownots-low-rate-4fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CrownotsLowRate4funServerServerReviewPage />;
}
