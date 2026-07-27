import WithReviewsSabrehavenWebsiteKeywordPage, { generateMetadata } from './with-reviews-sabrehaven-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSabrehavenWebsiteKeywordPage />;
}
