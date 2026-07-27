import OfficialOtmadnessOnlineKeywordPage, { generateMetadata } from './official-otmadness-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOtmadnessOnlineKeywordPage />;
}
