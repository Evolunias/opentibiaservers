import PapotRetroServerReviewPage, { generateMetadata } from './papot-retro';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PapotRetroServerReviewPage />;
}
