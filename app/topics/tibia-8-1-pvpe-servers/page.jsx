import Tibia81PvpeServersKeywordPage, { generateMetadata } from './tibia-8-1-pvpe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpeServersKeywordPage />;
}
