import RealMapTibianusGuideKeywordPage, { generateMetadata } from './real-map-tibianus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibianusGuideKeywordPage />;
}
