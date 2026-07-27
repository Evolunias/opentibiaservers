import CustomOlderaOnlineKeywordPage, { generateMetadata } from './custom-oldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOlderaOnlineKeywordPage />;
}
