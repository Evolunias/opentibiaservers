import Archlight11PvpeServerKeywordPage, { generateMetadata } from './archlight-11-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight11PvpeServerKeywordPage />;
}
