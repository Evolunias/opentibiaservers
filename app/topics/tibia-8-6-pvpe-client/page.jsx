import Tibia86PvpeClientKeywordPage, { generateMetadata } from './tibia-8-6-pvpe-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpeClientKeywordPage />;
}
