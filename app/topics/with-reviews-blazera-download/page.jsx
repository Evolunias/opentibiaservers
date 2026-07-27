import WithReviewsBlazeraDownloadKeywordPage, { generateMetadata } from './with-reviews-blazera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsBlazeraDownloadKeywordPage />;
}
