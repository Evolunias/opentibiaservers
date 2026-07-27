import Tibia11NoResetReviewKeywordPage, { generateMetadata } from './tibia-11-no-reset-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NoResetReviewKeywordPage />;
}
