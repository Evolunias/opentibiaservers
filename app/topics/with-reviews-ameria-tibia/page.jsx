import WithReviewsAmeriaTibiaKeywordPage, { generateMetadata } from './with-reviews-ameria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAmeriaTibiaKeywordPage />;
}
