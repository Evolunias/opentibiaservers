import OfficialTibiameOnlineKeywordPage, { generateMetadata } from './official-tibiame-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiameOnlineKeywordPage />;
}
