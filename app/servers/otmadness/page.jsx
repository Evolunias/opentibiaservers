import OtmadnessServerReviewPage, { generateMetadata } from './otmadness';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessServerReviewPage />;
}
