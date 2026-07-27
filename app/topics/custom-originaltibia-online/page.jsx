import CustomOriginaltibiaOnlineKeywordPage, { generateMetadata } from './custom-originaltibia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOriginaltibiaOnlineKeywordPage />;
}
