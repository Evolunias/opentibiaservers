import Tibia15PvpeServerListKeywordPage, { generateMetadata } from './tibia-15-pvpe-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpeServerListKeywordPage />;
}
