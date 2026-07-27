import Tibia13WithReviewsDownloadKeywordPage, { generateMetadata } from './tibia-13-with-reviews-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithReviewsDownloadKeywordPage />;
}
