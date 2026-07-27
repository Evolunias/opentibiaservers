import PopularOtmadnessOnlineKeywordPage, { generateMetadata } from './popular-otmadness-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOtmadnessOnlineKeywordPage />;
}
