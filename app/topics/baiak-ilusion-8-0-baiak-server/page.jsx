import BaiakIlusion80BaiakServerKeywordPage, { generateMetadata } from './baiak-ilusion-8-0-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusion80BaiakServerKeywordPage />;
}
