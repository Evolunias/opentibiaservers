import RivaliaOnlineServerReviewPage, { generateMetadata } from './rivalia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RivaliaOnlineServerReviewPage />;
}
