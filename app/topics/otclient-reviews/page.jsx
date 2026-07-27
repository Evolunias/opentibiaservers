import OtclientReviewsKeywordPage, { generateMetadata } from './otclient-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtclientReviewsKeywordPage />;
}
