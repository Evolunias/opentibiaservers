import Tibia86PvpeServersKeywordPage, { generateMetadata } from './tibia-8-6-pvpe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpeServersKeywordPage />;
}
