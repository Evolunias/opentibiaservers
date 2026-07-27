import OtServersReviewsKeywordPage, { generateMetadata } from './ot-servers-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersReviewsKeywordPage />;
}
