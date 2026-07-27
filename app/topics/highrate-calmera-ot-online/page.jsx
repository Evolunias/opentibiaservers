import HighrateCalmeraOtOnlineKeywordPage, { generateMetadata } from './highrate-calmera-ot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCalmeraOtOnlineKeywordPage />;
}
