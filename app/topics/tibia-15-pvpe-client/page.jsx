import Tibia15PvpeClientKeywordPage, { generateMetadata } from './tibia-15-pvpe-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpeClientKeywordPage />;
}
