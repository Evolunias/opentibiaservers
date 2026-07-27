import Archlight12PvpeServerKeywordPage, { generateMetadata } from './archlight-12-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight12PvpeServerKeywordPage />;
}
