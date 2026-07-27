import CustomTibiameOnlineKeywordPage, { generateMetadata } from './custom-tibiame-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiameOnlineKeywordPage />;
}
