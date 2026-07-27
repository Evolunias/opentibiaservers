import CustomCanobOnlineKeywordPage, { generateMetadata } from './custom-canob-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCanobOnlineKeywordPage />;
}
