import Tibia14PvpeServerKeywordPage, { generateMetadata } from './tibia-14-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpeServerKeywordPage />;
}
