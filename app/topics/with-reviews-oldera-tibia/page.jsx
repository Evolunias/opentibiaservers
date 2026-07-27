import WithReviewsOlderaTibiaKeywordPage, { generateMetadata } from './with-reviews-oldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOlderaTibiaKeywordPage />;
}
