import RealMapShadowcoresOtServerKeywordPage, { generateMetadata } from './real-map-shadowcores-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapShadowcoresOtServerKeywordPage />;
}
