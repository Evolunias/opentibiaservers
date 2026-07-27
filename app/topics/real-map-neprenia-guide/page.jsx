import RealMapNepreniaGuideKeywordPage, { generateMetadata } from './real-map-neprenia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNepreniaGuideKeywordPage />;
}
