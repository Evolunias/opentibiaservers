import OfficialCalmeraOtOnlineKeywordPage, { generateMetadata } from './official-calmera-ot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCalmeraOtOnlineKeywordPage />;
}
