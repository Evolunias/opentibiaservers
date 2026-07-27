import PvpeServerPvpKeywordPage, { generateMetadata } from './pvpe-server-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerPvpKeywordPage />;
}
