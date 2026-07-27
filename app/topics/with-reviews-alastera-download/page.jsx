import WithReviewsAlasteraDownloadKeywordPage, { generateMetadata } from './with-reviews-alastera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAlasteraDownloadKeywordPage />;
}
