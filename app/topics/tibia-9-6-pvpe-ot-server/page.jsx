import Tibia96PvpeOtServerKeywordPage, { generateMetadata } from './tibia-9-6-pvpe-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpeOtServerKeywordPage />;
}
