import WithReviewsArcaniarlDownloadKeywordPage, { generateMetadata } from './with-reviews-arcaniarl-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArcaniarlDownloadKeywordPage />;
}
