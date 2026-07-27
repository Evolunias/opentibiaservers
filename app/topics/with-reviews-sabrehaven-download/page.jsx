import WithReviewsSabrehavenDownloadKeywordPage, { generateMetadata } from './with-reviews-sabrehaven-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSabrehavenDownloadKeywordPage />;
}
