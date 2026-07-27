import Tibia13PvpeServersKeywordPage, { generateMetadata } from './tibia-13-pvpe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpeServersKeywordPage />;
}
