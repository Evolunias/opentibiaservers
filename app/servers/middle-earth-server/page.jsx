import MiddleEarthServerServerReviewPage, { generateMetadata } from './middle-earth-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiddleEarthServerServerReviewPage />;
}
