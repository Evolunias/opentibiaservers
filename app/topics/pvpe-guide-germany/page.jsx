import PvpeGuideGermanyKeywordPage, { generateMetadata } from './pvpe-guide-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeGuideGermanyKeywordPage />;
}
