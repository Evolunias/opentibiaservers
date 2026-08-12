import FastBaiakServerReviewPage, { generateMetadata } from './fast-baiak';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FastBaiakServerReviewPage />;
}
