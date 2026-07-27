import Tibia81PvpeServerListKeywordPage, { generateMetadata } from './tibia-8-1-pvpe-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpeServerListKeywordPage />;
}
