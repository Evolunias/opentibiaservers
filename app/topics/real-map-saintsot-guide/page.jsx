import RealMapSaintsotGuideKeywordPage, { generateMetadata } from './real-map-saintsot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSaintsotGuideKeywordPage />;
}
