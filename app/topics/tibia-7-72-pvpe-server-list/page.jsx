import Tibia772PvpeServerListKeywordPage, { generateMetadata } from './tibia-7-72-pvpe-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772PvpeServerListKeywordPage />;
}
