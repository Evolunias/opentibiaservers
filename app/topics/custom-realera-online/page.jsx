import CustomRealeraOnlineKeywordPage, { generateMetadata } from './custom-realera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealeraOnlineKeywordPage />;
}
