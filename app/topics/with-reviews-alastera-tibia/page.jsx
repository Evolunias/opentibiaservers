import WithReviewsAlasteraTibiaKeywordPage, { generateMetadata } from './with-reviews-alastera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAlasteraTibiaKeywordPage />;
}
