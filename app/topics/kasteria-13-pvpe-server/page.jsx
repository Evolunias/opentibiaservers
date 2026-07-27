import Kasteria13PvpeServerKeywordPage, { generateMetadata } from './kasteria-13-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria13PvpeServerKeywordPage />;
}
