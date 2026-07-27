import RealMapOtmadnessOnlineKeywordPage, { generateMetadata } from './real-map-otmadness-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtmadnessOnlineKeywordPage />;
}
