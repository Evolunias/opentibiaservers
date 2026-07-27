import RealMapShadowcoresKeywordPage, { generateMetadata } from './real-map-shadowcores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapShadowcoresKeywordPage />;
}
