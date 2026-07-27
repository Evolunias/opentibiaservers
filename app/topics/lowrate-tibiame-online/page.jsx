import LowrateTibiameOnlineKeywordPage, { generateMetadata } from './lowrate-tibiame-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiameOnlineKeywordPage />;
}
