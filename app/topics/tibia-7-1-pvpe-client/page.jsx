import Tibia71PvpeClientKeywordPage, { generateMetadata } from './tibia-7-1-pvpe-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpeClientKeywordPage />;
}
