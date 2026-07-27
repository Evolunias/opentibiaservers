import NewOtmadnessOnlineKeywordPage, { generateMetadata } from './new-otmadness-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOtmadnessOnlineKeywordPage />;
}
