import Tibia80PvpeServerKeywordPage, { generateMetadata } from './tibia-8-0-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpeServerKeywordPage />;
}
