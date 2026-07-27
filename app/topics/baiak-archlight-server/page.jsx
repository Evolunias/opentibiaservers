import BaiakArchlightServerKeywordPage, { generateMetadata } from './baiak-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakArchlightServerKeywordPage />;
}
