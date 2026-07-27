import Noxiousot12WithReviewsServerKeywordPage, { generateMetadata } from './noxiousot-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Noxiousot12WithReviewsServerKeywordPage />;
}
