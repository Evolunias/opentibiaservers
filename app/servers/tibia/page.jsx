import TibiaServerReviewPage, { generateMetadata } from './tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaServerReviewPage />;
}
