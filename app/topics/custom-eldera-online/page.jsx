import CustomElderaOnlineKeywordPage, { generateMetadata } from './custom-eldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomElderaOnlineKeywordPage />;
}
