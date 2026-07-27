import Tibia100PvpeServerListKeywordPage, { generateMetadata } from './tibia-10-0-pvpe-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpeServerListKeywordPage />;
}
