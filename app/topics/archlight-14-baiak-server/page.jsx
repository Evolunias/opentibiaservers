import Archlight14BaiakServerKeywordPage, { generateMetadata } from './archlight-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight14BaiakServerKeywordPage />;
}
