import HeroservServerReviewPage, { generateMetadata } from './heroserv';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HeroservServerReviewPage />;
}
