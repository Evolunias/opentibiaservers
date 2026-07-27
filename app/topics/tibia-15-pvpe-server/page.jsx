import Tibia15PvpeServerKeywordPage, { generateMetadata } from './tibia-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpeServerKeywordPage />;
}
