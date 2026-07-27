import RealMapTibiaraGuideKeywordPage, { generateMetadata } from './real-map-tibiara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaraGuideKeywordPage />;
}
