import RealMapArchlightGuideKeywordPage, { generateMetadata } from './real-map-archlight-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArchlightGuideKeywordPage />;
}
