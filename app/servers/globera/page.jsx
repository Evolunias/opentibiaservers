import GloberaServerReviewPage, { generateMetadata } from './globera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GloberaServerReviewPage />;
}
