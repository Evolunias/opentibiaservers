import RealMapTibijkaOnlineKeywordPage, { generateMetadata } from './real-map-tibijka-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibijkaOnlineKeywordPage />;
}
