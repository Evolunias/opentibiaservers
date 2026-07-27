import WithReviewsThorniaOpenTibiaKeywordPage, { generateMetadata } from './with-reviews-thornia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThorniaOpenTibiaKeywordPage />;
}
