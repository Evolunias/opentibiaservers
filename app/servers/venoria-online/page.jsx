import VenoriaOnlineServerReviewPage, { generateMetadata } from './venoria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoriaOnlineServerReviewPage />;
}
