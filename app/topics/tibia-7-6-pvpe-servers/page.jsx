import Tibia76PvpeServersKeywordPage, { generateMetadata } from './tibia-7-6-pvpe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpeServersKeywordPage />;
}
