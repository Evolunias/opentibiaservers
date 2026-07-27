import Tibia86PvpeServerKeywordPage, { generateMetadata } from './tibia-8-6-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpeServerKeywordPage />;
}
