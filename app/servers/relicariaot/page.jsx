import RelicariaotServerReviewPage, { generateMetadata } from './relicariaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RelicariaotServerReviewPage />;
}
