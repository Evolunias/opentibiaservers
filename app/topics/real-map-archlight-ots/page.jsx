import RealMapArchlightOtsKeywordPage, { generateMetadata } from './real-map-archlight-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArchlightOtsKeywordPage />;
}
