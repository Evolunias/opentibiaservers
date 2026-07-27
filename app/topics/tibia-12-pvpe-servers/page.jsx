import Tibia12PvpeServersKeywordPage, { generateMetadata } from './tibia-12-pvpe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpeServersKeywordPage />;
}
