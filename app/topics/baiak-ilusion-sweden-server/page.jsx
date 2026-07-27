import BaiakIlusionSwedenServerKeywordPage, { generateMetadata } from './baiak-ilusion-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionSwedenServerKeywordPage />;
}
