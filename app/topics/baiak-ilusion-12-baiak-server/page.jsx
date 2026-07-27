import BaiakIlusion12BaiakServerKeywordPage, { generateMetadata } from './baiak-ilusion-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusion12BaiakServerKeywordPage />;
}
