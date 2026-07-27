import Tibia854PvpeServerListKeywordPage, { generateMetadata } from './tibia-8-54-pvpe-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854PvpeServerListKeywordPage />;
}
