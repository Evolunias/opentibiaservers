import WithReviewsThorniaWebsiteKeywordPage, { generateMetadata } from './with-reviews-thornia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThorniaWebsiteKeywordPage />;
}
