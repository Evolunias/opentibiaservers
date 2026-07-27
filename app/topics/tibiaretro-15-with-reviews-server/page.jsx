import Tibiaretro15WithReviewsServerKeywordPage, { generateMetadata } from './tibiaretro-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro15WithReviewsServerKeywordPage />;
}
