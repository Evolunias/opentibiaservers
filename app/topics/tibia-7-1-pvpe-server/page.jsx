import Tibia71PvpeServerKeywordPage, { generateMetadata } from './tibia-7-1-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpeServerKeywordPage />;
}
