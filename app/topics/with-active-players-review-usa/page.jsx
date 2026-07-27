import WithActivePlayersReviewUsaKeywordPage, { generateMetadata } from './with-active-players-review-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersReviewUsaKeywordPage />;
}
