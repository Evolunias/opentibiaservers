import Tibia74PvpeServerListKeywordPage, { generateMetadata } from './tibia-7-4-pvpe-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpeServerListKeywordPage />;
}
