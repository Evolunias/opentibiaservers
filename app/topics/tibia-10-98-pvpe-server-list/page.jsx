import Tibia1098PvpeServerListKeywordPage, { generateMetadata } from './tibia-10-98-pvpe-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpeServerListKeywordPage />;
}
