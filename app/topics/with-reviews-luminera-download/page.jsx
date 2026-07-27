import WithReviewsLumineraDownloadKeywordPage, { generateMetadata } from './with-reviews-luminera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsLumineraDownloadKeywordPage />;
}
