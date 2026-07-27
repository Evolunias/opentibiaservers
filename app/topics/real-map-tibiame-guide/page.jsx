import RealMapTibiameGuideKeywordPage, { generateMetadata } from './real-map-tibiame-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiameGuideKeywordPage />;
}
