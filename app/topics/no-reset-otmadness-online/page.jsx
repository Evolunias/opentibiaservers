import NoResetOtmadnessOnlineKeywordPage, { generateMetadata } from './no-reset-otmadness-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOtmadnessOnlineKeywordPage />;
}
