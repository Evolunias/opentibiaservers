import WithReviewsRealestaTibiaKeywordPage, { generateMetadata } from './with-reviews-realesta-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealestaTibiaKeywordPage />;
}
