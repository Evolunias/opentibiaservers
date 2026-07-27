import TopOtmadnessOnlineKeywordPage, { generateMetadata } from './top-otmadness-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOtmadnessOnlineKeywordPage />;
}
