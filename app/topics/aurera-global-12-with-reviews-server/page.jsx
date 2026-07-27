import AureraGlobal12WithReviewsServerKeywordPage, { generateMetadata } from './aurera-global-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobal12WithReviewsServerKeywordPage />;
}
