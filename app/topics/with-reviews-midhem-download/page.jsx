import WithReviewsMidhemDownloadKeywordPage, { generateMetadata } from './with-reviews-midhem-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMidhemDownloadKeywordPage />;
}
