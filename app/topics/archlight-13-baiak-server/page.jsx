import Archlight13BaiakServerKeywordPage, { generateMetadata } from './archlight-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight13BaiakServerKeywordPage />;
}
