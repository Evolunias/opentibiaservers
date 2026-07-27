import Kasteria12PvpeServerKeywordPage, { generateMetadata } from './kasteria-12-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria12PvpeServerKeywordPage />;
}
