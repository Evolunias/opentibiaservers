import RealMapShadowcoresDownloadKeywordPage, { generateMetadata } from './real-map-shadowcores-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapShadowcoresDownloadKeywordPage />;
}
