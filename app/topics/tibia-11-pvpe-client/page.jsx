import Tibia11PvpeClientKeywordPage, { generateMetadata } from './tibia-11-pvpe-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpeClientKeywordPage />;
}
