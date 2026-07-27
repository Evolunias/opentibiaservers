import Tibia772PvpeServersKeywordPage, { generateMetadata } from './tibia-7-72-pvpe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772PvpeServersKeywordPage />;
}
