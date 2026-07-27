import CustomTibiascapeOnlineKeywordPage, { generateMetadata } from './custom-tibiascape-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiascapeOnlineKeywordPage />;
}
