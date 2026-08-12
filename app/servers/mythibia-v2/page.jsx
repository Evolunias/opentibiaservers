import MythibiaV2ServerReviewPage, { generateMetadata } from './mythibia-v2';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MythibiaV2ServerReviewPage />;
}
