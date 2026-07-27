import CustomRealestaOnlineKeywordPage, { generateMetadata } from './custom-realesta-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealestaOnlineKeywordPage />;
}
