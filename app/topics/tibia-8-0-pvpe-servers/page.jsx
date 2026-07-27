import Tibia80PvpeServersKeywordPage, { generateMetadata } from './tibia-8-0-pvpe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpeServersKeywordPage />;
}
