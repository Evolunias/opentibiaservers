import RealMapArcaniarlOnlineKeywordPage, { generateMetadata } from './real-map-arcaniarl-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArcaniarlOnlineKeywordPage />;
}
