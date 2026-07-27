import Tibia80PvpeClientKeywordPage, { generateMetadata } from './tibia-8-0-pvpe-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpeClientKeywordPage />;
}
