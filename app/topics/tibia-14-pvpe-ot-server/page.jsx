import Tibia14PvpeOtServerKeywordPage, { generateMetadata } from './tibia-14-pvpe-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpeOtServerKeywordPage />;
}
