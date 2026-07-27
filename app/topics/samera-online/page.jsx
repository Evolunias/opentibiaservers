import SameraOnlineKeywordPage, { generateMetadata } from './samera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SameraOnlineKeywordPage />;
}
