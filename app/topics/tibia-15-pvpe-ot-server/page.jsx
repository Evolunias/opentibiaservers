import Tibia15PvpeOtServerKeywordPage, { generateMetadata } from './tibia-15-pvpe-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpeOtServerKeywordPage />;
}
