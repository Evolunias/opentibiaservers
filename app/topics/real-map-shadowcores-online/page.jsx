import RealMapShadowcoresOnlineKeywordPage, { generateMetadata } from './real-map-shadowcores-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapShadowcoresOnlineKeywordPage />;
}
