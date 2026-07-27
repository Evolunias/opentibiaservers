import PvpeServerListGermanyKeywordPage, { generateMetadata } from './pvpe-server-list-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerListGermanyKeywordPage />;
}
