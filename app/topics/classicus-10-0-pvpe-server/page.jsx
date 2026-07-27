import Classicus100PvpeServerKeywordPage, { generateMetadata } from './classicus-10-0-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus100PvpeServerKeywordPage />;
}
