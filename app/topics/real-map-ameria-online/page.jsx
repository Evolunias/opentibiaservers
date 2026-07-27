import RealMapAmeriaOnlineKeywordPage, { generateMetadata } from './real-map-ameria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAmeriaOnlineKeywordPage />;
}
