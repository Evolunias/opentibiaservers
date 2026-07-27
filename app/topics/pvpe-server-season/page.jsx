import PvpeServerSeasonKeywordPage, { generateMetadata } from './pvpe-server-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerSeasonKeywordPage />;
}
