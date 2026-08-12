import GhastlyotServerReviewPage, { generateMetadata } from './ghastlyot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GhastlyotServerReviewPage />;
}
