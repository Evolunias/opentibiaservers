import RealMapShadowcoresGuideKeywordPage, { generateMetadata } from './real-map-shadowcores-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapShadowcoresGuideKeywordPage />;
}
