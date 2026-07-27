import BaiakIlusion15BaiakServerKeywordPage, { generateMetadata } from './baiak-ilusion-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusion15BaiakServerKeywordPage />;
}
