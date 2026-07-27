import Tibia14PvpeClientKeywordPage, { generateMetadata } from './tibia-14-pvpe-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpeClientKeywordPage />;
}
