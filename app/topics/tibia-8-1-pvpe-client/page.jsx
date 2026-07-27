import Tibia81PvpeClientKeywordPage, { generateMetadata } from './tibia-8-1-pvpe-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpeClientKeywordPage />;
}
