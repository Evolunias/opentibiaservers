import GrimhavenOtServerReviewPage, { generateMetadata } from './grimhaven-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GrimhavenOtServerReviewPage />;
}
