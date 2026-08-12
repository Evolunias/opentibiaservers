import OtMobileResetsServerReviewPage, { generateMetadata } from './ot-mobile-resets';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtMobileResetsServerReviewPage />;
}
