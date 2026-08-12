import MaskaotsActsIIiServerReviewPage, { generateMetadata } from './maskaots-acts-i-ii';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MaskaotsActsIIiServerReviewPage />;
}
