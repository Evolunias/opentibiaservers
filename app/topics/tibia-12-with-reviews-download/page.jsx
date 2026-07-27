import Tibia12WithReviewsDownloadKeywordPage, { generateMetadata } from './tibia-12-with-reviews-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithReviewsDownloadKeywordPage />;
}
