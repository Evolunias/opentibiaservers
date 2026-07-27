import RealMapBaiakIlusionWikiKeywordPage, { generateMetadata } from './real-map-baiak-ilusion-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapBaiakIlusionWikiKeywordPage />;
}
