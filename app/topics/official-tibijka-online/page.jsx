import OfficialTibijkaOnlineKeywordPage, { generateMetadata } from './official-tibijka-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibijkaOnlineKeywordPage />;
}
