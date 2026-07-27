import WithReviewsMistOfDeathKeywordPage, { generateMetadata } from './with-reviews-mist-of-death';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMistOfDeathKeywordPage />;
}
