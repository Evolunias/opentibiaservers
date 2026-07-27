import Noxiousot11WithReviewsServerKeywordPage, { generateMetadata } from './noxiousot-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Noxiousot11WithReviewsServerKeywordPage />;
}
