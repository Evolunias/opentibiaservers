import Tibia100PvpeServerKeywordPage, { generateMetadata } from './tibia-10-0-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpeServerKeywordPage />;
}
