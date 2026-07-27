import TopBaiakIlusionServerKeywordPage, { generateMetadata } from './top-baiak-ilusion-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopBaiakIlusionServerKeywordPage />;
}
