import WithReviewsMediviaTibiaKeywordPage, { generateMetadata } from './with-reviews-medivia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMediviaTibiaKeywordPage />;
}
