import WithReviewsBlazeraOpenTibiaKeywordPage, { generateMetadata } from './with-reviews-blazera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsBlazeraOpenTibiaKeywordPage />;
}
