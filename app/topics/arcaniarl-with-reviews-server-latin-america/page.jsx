import ArcaniarlWithReviewsServerLatinAmericaKeywordPage, { generateMetadata } from './arcaniarl-with-reviews-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlWithReviewsServerLatinAmericaKeywordPage />;
}
