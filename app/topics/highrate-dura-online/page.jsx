import HighrateDuraOnlineKeywordPage, { generateMetadata } from './highrate-dura-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateDuraOnlineKeywordPage />;
}
