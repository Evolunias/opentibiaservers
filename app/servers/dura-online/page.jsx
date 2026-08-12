import DuraOnlineServerReviewPage, { generateMetadata } from './dura-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineServerReviewPage />;
}
