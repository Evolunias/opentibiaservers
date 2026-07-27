import Tibia86PvpeServerListKeywordPage, { generateMetadata } from './tibia-8-6-pvpe-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpeServerListKeywordPage />;
}
