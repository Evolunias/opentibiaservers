import RealMapArchlightClientKeywordPage, { generateMetadata } from './real-map-archlight-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArchlightClientKeywordPage />;
}
