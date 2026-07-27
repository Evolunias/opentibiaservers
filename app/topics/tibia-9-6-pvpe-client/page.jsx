import Tibia96PvpeClientKeywordPage, { generateMetadata } from './tibia-9-6-pvpe-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpeClientKeywordPage />;
}
