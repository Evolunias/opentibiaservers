import NewCalmeraOtOnlineKeywordPage, { generateMetadata } from './new-calmera-ot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCalmeraOtOnlineKeywordPage />;
}
