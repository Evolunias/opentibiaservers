import RealMapShadowcoresClientKeywordPage, { generateMetadata } from './real-map-shadowcores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapShadowcoresClientKeywordPage />;
}
