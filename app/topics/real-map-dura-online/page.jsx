import RealMapDuraOnlineKeywordPage, { generateMetadata } from './real-map-dura-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDuraOnlineKeywordPage />;
}
