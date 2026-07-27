import OxygenotWithReviewsServerUsaKeywordPage, { generateMetadata } from './oxygenot-with-reviews-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotWithReviewsServerUsaKeywordPage />;
}
