import WithReviewsServerListFranceKeywordPage, { generateMetadata } from './with-reviews-server-list-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsServerListFranceKeywordPage />;
}
