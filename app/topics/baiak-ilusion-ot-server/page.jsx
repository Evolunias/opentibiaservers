import BaiakIlusionOtServerKeywordPage, { generateMetadata } from './baiak-ilusion-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionOtServerKeywordPage />;
}
