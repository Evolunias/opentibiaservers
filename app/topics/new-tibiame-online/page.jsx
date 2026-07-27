import NewTibiameOnlineKeywordPage, { generateMetadata } from './new-tibiame-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiameOnlineKeywordPage />;
}
