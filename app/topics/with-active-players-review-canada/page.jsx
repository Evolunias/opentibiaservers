import WithActivePlayersReviewCanadaKeywordPage, { generateMetadata } from './with-active-players-review-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersReviewCanadaKeywordPage />;
}
