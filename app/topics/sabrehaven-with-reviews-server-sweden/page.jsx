import SabrehavenWithReviewsServerSwedenKeywordPage, { generateMetadata } from './sabrehaven-with-reviews-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenWithReviewsServerSwedenKeywordPage />;
}
