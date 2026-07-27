import Tibia76PvpeOtServerKeywordPage, { generateMetadata } from './tibia-7-6-pvpe-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpeOtServerKeywordPage />;
}
