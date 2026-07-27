import RealMapArchlightOtServerKeywordPage, { generateMetadata } from './real-map-archlight-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArchlightOtServerKeywordPage />;
}
