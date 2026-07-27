import RealMapShadowcoresOtKeywordPage, { generateMetadata } from './real-map-shadowcores-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapShadowcoresOtKeywordPage />;
}
