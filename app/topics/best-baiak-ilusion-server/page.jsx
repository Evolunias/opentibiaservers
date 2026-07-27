import BestBaiakIlusionServerKeywordPage, { generateMetadata } from './best-baiak-ilusion-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestBaiakIlusionServerKeywordPage />;
}
