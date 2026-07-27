import Tibia100PvpeServersKeywordPage, { generateMetadata } from './tibia-10-0-pvpe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpeServersKeywordPage />;
}
