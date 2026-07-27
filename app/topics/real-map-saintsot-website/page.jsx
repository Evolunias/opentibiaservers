import RealMapSaintsotWebsiteKeywordPage, { generateMetadata } from './real-map-saintsot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSaintsotWebsiteKeywordPage />;
}
