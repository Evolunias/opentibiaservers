import WithReviewsArchlightTibiaKeywordPage, { generateMetadata } from './with-reviews-archlight-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArchlightTibiaKeywordPage />;
}
