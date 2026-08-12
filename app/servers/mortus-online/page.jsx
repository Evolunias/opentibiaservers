import MortusOnlineServerReviewPage, { generateMetadata } from './mortus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MortusOnlineServerReviewPage />;
}
