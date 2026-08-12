import ElderanOnlineServerReviewPage, { generateMetadata } from './elderan-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderanOnlineServerReviewPage />;
}
