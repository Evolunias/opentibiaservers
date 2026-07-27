import Tibia11PvpeOtServerKeywordPage, { generateMetadata } from './tibia-11-pvpe-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpeOtServerKeywordPage />;
}
