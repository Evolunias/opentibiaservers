import RealMapArchlightServerKeywordPage, { generateMetadata } from './real-map-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArchlightServerKeywordPage />;
}
