import Tibia71PvpeServersKeywordPage, { generateMetadata } from './tibia-7-1-pvpe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpeServersKeywordPage />;
}
