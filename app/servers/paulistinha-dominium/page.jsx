import PaulistinhaDominiumServerReviewPage, { generateMetadata } from './paulistinha-dominium';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PaulistinhaDominiumServerReviewPage />;
}
