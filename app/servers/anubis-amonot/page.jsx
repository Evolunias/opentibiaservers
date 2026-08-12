import AnubisAmonotServerReviewPage, { generateMetadata } from './anubis-amonot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AnubisAmonotServerReviewPage />;
}
