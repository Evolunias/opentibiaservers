import LowrateOtmadnessOnlineKeywordPage, { generateMetadata } from './lowrate-otmadness-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOtmadnessOnlineKeywordPage />;
}
