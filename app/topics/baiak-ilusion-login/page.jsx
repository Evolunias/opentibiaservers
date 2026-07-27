import BaiakIlusionLoginKeywordPage, { generateMetadata } from './baiak-ilusion-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionLoginKeywordPage />;
}
