import CanobPvpeServerGermanyKeywordPage, { generateMetadata } from './canob-pvpe-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobPvpeServerGermanyKeywordPage />;
}
