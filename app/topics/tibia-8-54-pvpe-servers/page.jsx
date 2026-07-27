import Tibia854PvpeServersKeywordPage, { generateMetadata } from './tibia-8-54-pvpe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854PvpeServersKeywordPage />;
}
