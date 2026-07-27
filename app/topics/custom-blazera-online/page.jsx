import CustomBlazeraOnlineKeywordPage, { generateMetadata } from './custom-blazera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBlazeraOnlineKeywordPage />;
}
