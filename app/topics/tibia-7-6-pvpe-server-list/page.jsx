import Tibia76PvpeServerListKeywordPage, { generateMetadata } from './tibia-7-6-pvpe-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpeServerListKeywordPage />;
}
