import Kasteria11PvpeServerKeywordPage, { generateMetadata } from './kasteria-11-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria11PvpeServerKeywordPage />;
}
