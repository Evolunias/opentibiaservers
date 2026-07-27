import TibiaOtServerReviewsKeywordPage, { generateMetadata } from './tibia-ot-server-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServerReviewsKeywordPage />;
}
