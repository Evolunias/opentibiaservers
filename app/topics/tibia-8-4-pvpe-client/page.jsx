import Tibia84PvpeClientKeywordPage, { generateMetadata } from './tibia-8-4-pvpe-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpeClientKeywordPage />;
}
