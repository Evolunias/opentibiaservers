import ChaosRebornServerReviewPage, { generateMetadata } from './chaos-reborn';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ChaosRebornServerReviewPage />;
}
