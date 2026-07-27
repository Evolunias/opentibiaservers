import TibiaretroWithReviewsServerUsaKeywordPage, { generateMetadata } from './tibiaretro-with-reviews-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroWithReviewsServerUsaKeywordPage />;
}
