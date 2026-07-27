import Tibia13PvpeServerListKeywordPage, { generateMetadata } from './tibia-13-pvpe-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpeServerListKeywordPage />;
}
