import WithReviewsStatusFranceKeywordPage, { generateMetadata } from './with-reviews-status-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsStatusFranceKeywordPage />;
}
