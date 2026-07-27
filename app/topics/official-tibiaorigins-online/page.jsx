import OfficialTibiaoriginsOnlineKeywordPage, { generateMetadata } from './official-tibiaorigins-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaoriginsOnlineKeywordPage />;
}
