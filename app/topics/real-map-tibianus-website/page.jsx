import RealMapTibianusWebsiteKeywordPage, { generateMetadata } from './real-map-tibianus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibianusWebsiteKeywordPage />;
}
