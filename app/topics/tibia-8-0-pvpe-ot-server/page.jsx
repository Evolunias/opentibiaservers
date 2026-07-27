import Tibia80PvpeOtServerKeywordPage, { generateMetadata } from './tibia-8-0-pvpe-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpeOtServerKeywordPage />;
}
