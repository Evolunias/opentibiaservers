import PatagoniaOnlineServerReviewPage, { generateMetadata } from './patagonia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PatagoniaOnlineServerReviewPage />;
}
