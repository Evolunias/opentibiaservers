import WithReviewsDownloadUkKeywordPage, { generateMetadata } from './with-reviews-download-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDownloadUkKeywordPage />;
}
