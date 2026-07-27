import Tibia81PvpeOtServerKeywordPage, { generateMetadata } from './tibia-8-1-pvpe-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpeOtServerKeywordPage />;
}
