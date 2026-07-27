import PvpeGuideNorthAmericaKeywordPage, { generateMetadata } from './pvpe-guide-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeGuideNorthAmericaKeywordPage />;
}
