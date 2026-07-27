import OtmadnessOnlineKeywordPage, { generateMetadata } from './otmadness-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessOnlineKeywordPage />;
}
