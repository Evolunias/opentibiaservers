import Classicus12PvpeServerKeywordPage, { generateMetadata } from './classicus-12-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus12PvpeServerKeywordPage />;
}
