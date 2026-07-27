import Tibia1098PvpeServersKeywordPage, { generateMetadata } from './tibia-10-98-pvpe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpeServersKeywordPage />;
}
