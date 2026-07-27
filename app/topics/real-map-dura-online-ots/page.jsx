import RealMapDuraOnlineOtsKeywordPage, { generateMetadata } from './real-map-dura-online-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDuraOnlineOtsKeywordPage />;
}
