import CustomTibijkaOnlineKeywordPage, { generateMetadata } from './custom-tibijka-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibijkaOnlineKeywordPage />;
}
