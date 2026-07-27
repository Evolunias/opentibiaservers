import RealMapTibianusOnlineKeywordPage, { generateMetadata } from './real-map-tibianus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibianusOnlineKeywordPage />;
}
