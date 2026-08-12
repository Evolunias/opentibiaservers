import VitoxOts86ServerReviewPage, { generateMetadata } from './vitox-ots-8-6';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VitoxOts86ServerReviewPage />;
}
