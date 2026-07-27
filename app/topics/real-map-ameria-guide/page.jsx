import RealMapAmeriaGuideKeywordPage, { generateMetadata } from './real-map-ameria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAmeriaGuideKeywordPage />;
}
