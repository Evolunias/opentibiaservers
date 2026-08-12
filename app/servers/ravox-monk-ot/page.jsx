import RavoxMonkOtServerReviewPage, { generateMetadata } from './ravox-monk-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RavoxMonkOtServerReviewPage />;
}
