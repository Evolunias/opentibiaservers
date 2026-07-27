import RealMapThaisotOnlineKeywordPage, { generateMetadata } from './real-map-thaisot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThaisotOnlineKeywordPage />;
}
