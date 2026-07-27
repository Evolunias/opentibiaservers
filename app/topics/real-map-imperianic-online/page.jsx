import RealMapImperianicOnlineKeywordPage, { generateMetadata } from './real-map-imperianic-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapImperianicOnlineKeywordPage />;
}
