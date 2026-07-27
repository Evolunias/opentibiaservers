import Archlight13PvpeServerKeywordPage, { generateMetadata } from './archlight-13-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight13PvpeServerKeywordPage />;
}
