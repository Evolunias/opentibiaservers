import FaloriaServerReviewPage, { generateMetadata } from './faloria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FaloriaServerReviewPage />;
}
