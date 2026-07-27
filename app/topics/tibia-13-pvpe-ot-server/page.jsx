import Tibia13PvpeOtServerKeywordPage, { generateMetadata } from './tibia-13-pvpe-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpeOtServerKeywordPage />;
}
