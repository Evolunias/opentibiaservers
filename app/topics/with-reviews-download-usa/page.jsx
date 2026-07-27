import WithReviewsDownloadUsaKeywordPage, { generateMetadata } from './with-reviews-download-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDownloadUsaKeywordPage />;
}
