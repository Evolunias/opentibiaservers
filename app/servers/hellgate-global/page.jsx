import HellgateGlobalServerReviewPage, { generateMetadata } from './hellgate-global';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HellgateGlobalServerReviewPage />;
}
