import WithReviewsOlderaDownloadKeywordPage, { generateMetadata } from './with-reviews-oldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOlderaDownloadKeywordPage />;
}
