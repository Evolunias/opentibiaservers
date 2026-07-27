import Tibia1098PvpeClientKeywordPage, { generateMetadata } from './tibia-10-98-pvpe-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpeClientKeywordPage />;
}
