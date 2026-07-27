import BaiakIlusionServerKeywordPage, { generateMetadata } from './baiak-ilusion-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionServerKeywordPage />;
}
