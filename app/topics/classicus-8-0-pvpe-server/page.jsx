import Classicus80PvpeServerKeywordPage, { generateMetadata } from './classicus-8-0-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus80PvpeServerKeywordPage />;
}
