import TibiaRealMapServerOnlineKeywordPage, { generateMetadata } from './tibia-real-map-server-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerOnlineKeywordPage />;
}
