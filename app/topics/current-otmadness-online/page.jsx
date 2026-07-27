import CurrentOtmadnessOnlineKeywordPage, { generateMetadata } from './current-otmadness-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOtmadnessOnlineKeywordPage />;
}
