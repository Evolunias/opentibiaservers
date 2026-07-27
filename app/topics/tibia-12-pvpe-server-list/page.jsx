import Tibia12PvpeServerListKeywordPage, { generateMetadata } from './tibia-12-pvpe-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpeServerListKeywordPage />;
}
