import Tibia15PvpeServersKeywordPage, { generateMetadata } from './tibia-15-pvpe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpeServersKeywordPage />;
}
