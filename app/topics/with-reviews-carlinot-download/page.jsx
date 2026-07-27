import WithReviewsCarlinotDownloadKeywordPage, { generateMetadata } from './with-reviews-carlinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCarlinotDownloadKeywordPage />;
}
