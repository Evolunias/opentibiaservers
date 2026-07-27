import Tibia81PvpeServerKeywordPage, { generateMetadata } from './tibia-8-1-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpeServerKeywordPage />;
}
