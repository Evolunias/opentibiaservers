import Tibia96PvpeServersKeywordPage, { generateMetadata } from './tibia-9-6-pvpe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpeServersKeywordPage />;
}
