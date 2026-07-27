import PvpeStatusSwedenKeywordPage, { generateMetadata } from './pvpe-status-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeStatusSwedenKeywordPage />;
}
