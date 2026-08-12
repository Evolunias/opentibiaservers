import BloxerOtServerReviewPage, { generateMetadata } from './bloxer-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BloxerOtServerReviewPage />;
}
