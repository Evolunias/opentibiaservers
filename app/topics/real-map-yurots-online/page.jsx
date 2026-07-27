import RealMapYurotsOnlineKeywordPage, { generateMetadata } from './real-map-yurots-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapYurotsOnlineKeywordPage />;
}
