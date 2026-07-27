import RealMapOlderaGuideKeywordPage, { generateMetadata } from './real-map-oldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOlderaGuideKeywordPage />;
}
