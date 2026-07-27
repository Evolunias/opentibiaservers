import ThorniaWithReviewsServerUsaKeywordPage, { generateMetadata } from './thornia-with-reviews-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaWithReviewsServerUsaKeywordPage />;
}
