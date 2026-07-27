import FreshStartMediviaOnlineKeywordPage, { generateMetadata } from './fresh-start-medivia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMediviaOnlineKeywordPage />;
}
