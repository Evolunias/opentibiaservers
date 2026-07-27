import Oldera12PvpeServerKeywordPage, { generateMetadata } from './oldera-12-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera12PvpeServerKeywordPage />;
}
