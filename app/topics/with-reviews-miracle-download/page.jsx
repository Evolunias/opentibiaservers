import WithReviewsMiracleDownloadKeywordPage, { generateMetadata } from './with-reviews-miracle-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMiracleDownloadKeywordPage />;
}
