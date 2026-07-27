import Tibia76PvpeClientKeywordPage, { generateMetadata } from './tibia-7-6-pvpe-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpeClientKeywordPage />;
}
