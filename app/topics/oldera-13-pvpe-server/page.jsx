import Oldera13PvpeServerKeywordPage, { generateMetadata } from './oldera-13-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera13PvpeServerKeywordPage />;
}
