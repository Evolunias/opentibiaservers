import RealMapMediviaOnlineKeywordPage, { generateMetadata } from './real-map-medivia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMediviaOnlineKeywordPage />;
}
