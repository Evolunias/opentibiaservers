import WithReviewsNostaltherTibiaKeywordPage, { generateMetadata } from './with-reviews-nostalther-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNostaltherTibiaKeywordPage />;
}
