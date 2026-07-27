import PvpeStatusGermanyKeywordPage, { generateMetadata } from './pvpe-status-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeStatusGermanyKeywordPage />;
}
