import CustomImperianicOnlineKeywordPage, { generateMetadata } from './custom-imperianic-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomImperianicOnlineKeywordPage />;
}
