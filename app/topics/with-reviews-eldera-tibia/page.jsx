import WithReviewsElderaTibiaKeywordPage, { generateMetadata } from './with-reviews-eldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsElderaTibiaKeywordPage />;
}
