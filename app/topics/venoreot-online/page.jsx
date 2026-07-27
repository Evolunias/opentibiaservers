import VenoreotOnlineKeywordPage, { generateMetadata } from './venoreot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotOnlineKeywordPage />;
}
