import Kasteria14PvpeServerKeywordPage, { generateMetadata } from './kasteria-14-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria14PvpeServerKeywordPage />;
}
