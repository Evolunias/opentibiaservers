import Archlight11BaiakServerKeywordPage, { generateMetadata } from './archlight-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight11BaiakServerKeywordPage />;
}
