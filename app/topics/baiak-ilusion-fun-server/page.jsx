import BaiakIlusionFunServerKeywordPage, { generateMetadata } from './baiak-ilusion-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionFunServerKeywordPage />;
}
