import RealMapShadowcoresWikiKeywordPage, { generateMetadata } from './real-map-shadowcores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapShadowcoresWikiKeywordPage />;
}
