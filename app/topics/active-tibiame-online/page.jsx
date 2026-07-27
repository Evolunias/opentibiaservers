import ActiveTibiameOnlineKeywordPage, { generateMetadata } from './active-tibiame-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiameOnlineKeywordPage />;
}
