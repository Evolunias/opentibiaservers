import Archlight14PvpeServerKeywordPage, { generateMetadata } from './archlight-14-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight14PvpeServerKeywordPage />;
}
