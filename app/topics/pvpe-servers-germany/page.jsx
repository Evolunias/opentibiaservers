import PvpeServersGermanyKeywordPage, { generateMetadata } from './pvpe-servers-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServersGermanyKeywordPage />;
}
