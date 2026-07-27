import Tibia11PvpeServerListKeywordPage, { generateMetadata } from './tibia-11-pvpe-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpeServerListKeywordPage />;
}
