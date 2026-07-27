import Archlight15PvpeServerKeywordPage, { generateMetadata } from './archlight-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight15PvpeServerKeywordPage />;
}
