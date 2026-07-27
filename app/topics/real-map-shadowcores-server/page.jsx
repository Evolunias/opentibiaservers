import RealMapShadowcoresServerKeywordPage, { generateMetadata } from './real-map-shadowcores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapShadowcoresServerKeywordPage />;
}
