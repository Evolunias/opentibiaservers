import Tibia14PvpeServerListKeywordPage, { generateMetadata } from './tibia-14-pvpe-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpeServerListKeywordPage />;
}
