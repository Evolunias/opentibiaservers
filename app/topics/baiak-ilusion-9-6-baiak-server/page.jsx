import BaiakIlusion96BaiakServerKeywordPage, { generateMetadata } from './baiak-ilusion-9-6-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusion96BaiakServerKeywordPage />;
}
