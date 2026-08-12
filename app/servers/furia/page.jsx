import FuriaServerReviewPage, { generateMetadata } from './furia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FuriaServerReviewPage />;
}
