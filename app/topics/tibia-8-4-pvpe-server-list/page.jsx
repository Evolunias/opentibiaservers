import Tibia84PvpeServerListKeywordPage, { generateMetadata } from './tibia-8-4-pvpe-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpeServerListKeywordPage />;
}
