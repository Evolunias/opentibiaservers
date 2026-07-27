import CalmeraOtOnlineKeywordPage, { generateMetadata } from './calmera-ot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtOnlineKeywordPage />;
}
