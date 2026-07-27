import PvpeGuideEuropeKeywordPage, { generateMetadata } from './pvpe-guide-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeGuideEuropeKeywordPage />;
}
