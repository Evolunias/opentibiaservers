import VisionotServerReviewPage, { generateMetadata } from './visionot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VisionotServerReviewPage />;
}
