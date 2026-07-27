import RealMapGuideNorthAmericaKeywordPage, { generateMetadata } from './real-map-guide-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGuideNorthAmericaKeywordPage />;
}
