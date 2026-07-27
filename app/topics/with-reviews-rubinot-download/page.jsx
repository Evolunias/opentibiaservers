import WithReviewsRubinotDownloadKeywordPage, { generateMetadata } from './with-reviews-rubinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRubinotDownloadKeywordPage />;
}
