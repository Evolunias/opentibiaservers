import RealMapShadowcoresOtsKeywordPage, { generateMetadata } from './real-map-shadowcores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapShadowcoresOtsKeywordPage />;
}
