import Tibia12PvpeOtServerKeywordPage, { generateMetadata } from './tibia-12-pvpe-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpeOtServerKeywordPage />;
}
