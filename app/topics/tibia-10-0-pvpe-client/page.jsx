import Tibia100PvpeClientKeywordPage, { generateMetadata } from './tibia-10-0-pvpe-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpeClientKeywordPage />;
}
