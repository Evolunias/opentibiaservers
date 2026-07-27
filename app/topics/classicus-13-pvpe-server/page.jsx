import Classicus13PvpeServerKeywordPage, { generateMetadata } from './classicus-13-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus13PvpeServerKeywordPage />;
}
