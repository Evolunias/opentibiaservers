import RealMapKasteriaOnlineKeywordPage, { generateMetadata } from './real-map-kasteria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapKasteriaOnlineKeywordPage />;
}
