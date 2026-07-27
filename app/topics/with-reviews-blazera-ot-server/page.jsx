import WithReviewsBlazeraOtServerKeywordPage, { generateMetadata } from './with-reviews-blazera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsBlazeraOtServerKeywordPage />;
}
