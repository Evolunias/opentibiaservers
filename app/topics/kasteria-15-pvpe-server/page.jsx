import Kasteria15PvpeServerKeywordPage, { generateMetadata } from './kasteria-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria15PvpeServerKeywordPage />;
}
