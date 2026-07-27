import Classicus81PvpeServerKeywordPage, { generateMetadata } from './classicus-8-1-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus81PvpeServerKeywordPage />;
}
