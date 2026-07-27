import Classicus71PvpeServerKeywordPage, { generateMetadata } from './classicus-7-1-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus71PvpeServerKeywordPage />;
}
