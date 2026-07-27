import WithReviewsMediviaOpenTibiaKeywordPage, { generateMetadata } from './with-reviews-medivia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMediviaOpenTibiaKeywordPage />;
}
