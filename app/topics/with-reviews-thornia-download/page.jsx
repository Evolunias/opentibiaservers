import WithReviewsThorniaDownloadKeywordPage, { generateMetadata } from './with-reviews-thornia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThorniaDownloadKeywordPage />;
}
