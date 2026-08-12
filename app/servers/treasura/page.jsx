import TreasuraServerReviewPage, { generateMetadata } from './treasura';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TreasuraServerReviewPage />;
}
