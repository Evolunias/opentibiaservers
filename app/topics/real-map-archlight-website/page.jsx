import RealMapArchlightWebsiteKeywordPage, { generateMetadata } from './real-map-archlight-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArchlightWebsiteKeywordPage />;
}
