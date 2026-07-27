import TibiameOnlineKeywordPage, { generateMetadata } from './tibiame-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameOnlineKeywordPage />;
}
