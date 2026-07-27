import RealMapNepreniaOnlineKeywordPage, { generateMetadata } from './real-map-neprenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNepreniaOnlineKeywordPage />;
}
