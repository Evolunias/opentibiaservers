import Tibia12PvpeServerKeywordPage, { generateMetadata } from './tibia-12-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpeServerKeywordPage />;
}
