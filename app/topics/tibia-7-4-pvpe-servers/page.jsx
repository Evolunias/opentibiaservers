import Tibia74PvpeServersKeywordPage, { generateMetadata } from './tibia-7-4-pvpe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpeServersKeywordPage />;
}
