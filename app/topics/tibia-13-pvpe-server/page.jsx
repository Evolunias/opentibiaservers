import Tibia13PvpeServerKeywordPage, { generateMetadata } from './tibia-13-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpeServerKeywordPage />;
}
