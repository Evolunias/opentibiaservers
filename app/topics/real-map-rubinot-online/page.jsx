import RealMapRubinotOnlineKeywordPage, { generateMetadata } from './real-map-rubinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRubinotOnlineKeywordPage />;
}
