import NtoStarNewNarutibiaServerReviewPage, { generateMetadata } from './nto-star-new-narutibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarNewNarutibiaServerReviewPage />;
}
