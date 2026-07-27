import BaiakIlusion13BaiakServerKeywordPage, { generateMetadata } from './baiak-ilusion-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusion13BaiakServerKeywordPage />;
}
