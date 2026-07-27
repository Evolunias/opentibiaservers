import TopBaiakIlusionClientKeywordPage, { generateMetadata } from './top-baiak-ilusion-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopBaiakIlusionClientKeywordPage />;
}
