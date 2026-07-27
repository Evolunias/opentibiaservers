import Archlight80PvpeServerKeywordPage, { generateMetadata } from './archlight-8-0-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight80PvpeServerKeywordPage />;
}
