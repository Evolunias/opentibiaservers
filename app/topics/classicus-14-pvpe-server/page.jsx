import Classicus14PvpeServerKeywordPage, { generateMetadata } from './classicus-14-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus14PvpeServerKeywordPage />;
}
