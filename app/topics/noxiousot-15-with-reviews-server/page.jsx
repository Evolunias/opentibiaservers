import Noxiousot15WithReviewsServerKeywordPage, { generateMetadata } from './noxiousot-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Noxiousot15WithReviewsServerKeywordPage />;
}
