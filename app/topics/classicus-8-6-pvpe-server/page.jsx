import Classicus86PvpeServerKeywordPage, { generateMetadata } from './classicus-8-6-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus86PvpeServerKeywordPage />;
}
