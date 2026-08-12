import GamadaServerReviewPage, { generateMetadata } from './gamada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GamadaServerReviewPage />;
}
