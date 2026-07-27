import WithReviewsMediviaDownloadKeywordPage, { generateMetadata } from './with-reviews-medivia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMediviaDownloadKeywordPage />;
}
