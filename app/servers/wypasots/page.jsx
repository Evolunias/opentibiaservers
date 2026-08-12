import WypasotsServerReviewPage, { generateMetadata } from './wypasots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WypasotsServerReviewPage />;
}
