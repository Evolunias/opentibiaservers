import Tibia11PvpeServersKeywordPage, { generateMetadata } from './tibia-11-pvpe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpeServersKeywordPage />;
}
