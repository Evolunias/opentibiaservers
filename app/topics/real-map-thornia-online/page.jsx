import RealMapThorniaOnlineKeywordPage, { generateMetadata } from './real-map-thornia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThorniaOnlineKeywordPage />;
}
