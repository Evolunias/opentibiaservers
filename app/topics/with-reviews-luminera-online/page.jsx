import WithReviewsLumineraOnlineKeywordPage, { generateMetadata } from './with-reviews-luminera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsLumineraOnlineKeywordPage />;
}
