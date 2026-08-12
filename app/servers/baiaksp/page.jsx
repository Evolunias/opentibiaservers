import BaiakspServerReviewPage, { generateMetadata } from './baiaksp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakspServerReviewPage />;
}
