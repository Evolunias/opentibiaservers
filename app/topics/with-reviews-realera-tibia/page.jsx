import WithReviewsRealeraTibiaKeywordPage, { generateMetadata } from './with-reviews-realera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealeraTibiaKeywordPage />;
}
