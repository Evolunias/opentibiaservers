import Tibia86PvpeOtServerKeywordPage, { generateMetadata } from './tibia-8-6-pvpe-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpeOtServerKeywordPage />;
}
